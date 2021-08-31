import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, AlertController, IonSlides, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { ImagePicker,ImagePickerOptions, OutputType} from '@ionic-native/image-picker/ngx';
import { Item } from './Item-Model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemFireStore } from './Item-service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

viewEntered = false;
coverImage = null;
images: any[] = [];
imageUrls : any[] = [];
showError = false
formFinish = false;
errorMsg=""
item: any ;
currentUser = null;
base64Images =[];
public itemForm: FormGroup;

@ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  slidesOptions: any = {
    slidesPerView:1,
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };
  constructor(
    private modalController:ModalController,
    private actionSheetController : ActionSheetController,
    private plt: Platform,
    private imagePicker :ImagePicker,
    private loadingCtrl:LoadingController,
    private itemService :ItemFireStore,
    private formBuilder : FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl :AlertController
    
    ) { }

  ngOnInit() {

    this.itemService.getCurrentUser().subscribe(user=>{
      console.log('CURRRRRRENT USER ************'+JSON.stringify( user))
      this.currentUser = user;
    });


    this.itemForm = this.formBuilder.group({
      postType: [''],
      title: ['' , Validators.required],
      cat: [''],
      subCat: [''],
      condition: ['' , Validators.required],
      desc: ['' , Validators.required],
      price: ['' , Validators.required],
      firmOnPrice: [''],
      address: ['' , Validators.required],
      brand: [''],
      color: [''],
      size: [''],
      madeIn: [''],
      canDeliver:[''],
    });
   this.item = new Item();

  }

  ionViewDidEnter() {
    this.viewEntered = true;
}

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }
  
  urlEventHander($evnt: any) {
    this.imageUrls.push = $evnt;
    console.log("::::::::::Event Emitted ::::::::: " +$evnt)
  }


  async next() {
    
    this.slides.getActiveIndex().then(index => {
      console.log(index);
      if(index==3 ){
      this.formFinish = true;
      }
   });
    this.slides.slideNext();
   }

selectSaleType(){
  this.item.postType = 1;

}
selectRentType(){
  this.item.postType = 0;
}

selectCoverPhoto(){

}

async selectImageSource() {
  const buttons = [
    {
      text: 'Take Photo',
      icon: 'camera',
      handler: () => {
        this.addImage(CameraSource.Camera);
      }
    },
    {
      text: 'Choose From Photos',
      icon: 'image',
      handler: () => {
        this.addImage(CameraSource.Photos);
      }
    }
  ];

  // Only allow file selection inside a browser
  if (!this.plt.is('hybrid')) {
    buttons.push({
      text: 'Choose a File',
      icon: 'attach',
      handler: () => {
        this.fileInput.nativeElement.click();
      }
    });
  }

  const actionSheet = await this.actionSheetController.create({
    header: 'Select Image Source',
    buttons
  });
  await actionSheet.present();
}

async pickSinglemage(){
  var options: ImagePickerOptions ={
    outputType:OutputType.DATA_URL,
  }
  this.imagePicker.getPictures(options).then((result) => {
    this.coverImage = 'data:image/jpeg;base64,' + result;
    this.images[0].push(this.coverImage);
  }, (err) => {console.log(err) });
}

async addImage(source: CameraSource) {
    await Camera.getPhoto({
    quality: 60,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source
  }).then((result) => {
    this.coverImage = 'data:image/jpeg;base64,' + result;
    this.itemForm.patchValue({ coverImg: result });
  },(err) => { console.log(err)});

}
showErrorMsg( msg, show){
  this.showError = true;
  this.errorMsg = msg;

}

b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

pickMultipleImages(){
  var options: ImagePickerOptions ={
    maximumImagesCount:6,
    outputType:OutputType.DATA_URL,
  }
  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
      //let filename = results[i].
        let base64Image = 'data:image/jpeg;base64,' + results[i];
        this.base64Images.push(base64Image);
        this.images.push(results[i]);
    }
  }, (err) => { });
}




async imgEdit() {
  const buttons = [
    {
      text: 'Set as cover photo',
      handler: () => {
        //this.addImage(CameraSource.Camera);
      }
    },
    {
      text: 'Edit',
      handler: () => {

      }
    },
    {
      text: 'Delete',
      handler: () => {
      }
    },
    {
      text: 'Cancel',
      handler: () => {

      }
    }
  ];

  const actionSheet = await this.actionSheetController.create({
    buttons
  });
  await actionSheet.present();
}


async saveItem() {
  let loading = await this.loadingCtrl.create({
    message: "loading...",
  });
  await loading.present();
  this.itemService.addNewItem( this.currentUser, this.itemForm.value , this.images).then(
    async (res) => {
      loading.dismiss();
      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: "Successfully Posted new Item!",
      });
      toast.present();
      console.log("finished: ", res);
    },
    async (err) => {
      await loading.dismiss();

      let alert = await this.alertCtrl.create({
        header: "Error",
        message: err.message,
        buttons: ["OK"],
      });
      alert.present();
    }
  );
}

}