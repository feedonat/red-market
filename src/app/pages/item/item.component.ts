import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, IonSlides, ModalController, Platform } from '@ionic/angular';
import { ImagePicker,ImagePickerOptions, OutputType} from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

step1 = true;
step2 = false;
step3 = false;
step4=false;
step5=false;
forSale = true;
forRent = false;
viewEntered = false;
images: any[] = [];
coverImage = null;

@ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };
  constructor(
    private modalController:ModalController,
    private actionSheetController : ActionSheetController,
    private plt: Platform,
    private imagePicker :ImagePicker
    
    ) { }

  ngOnInit() {
   
  }

  ionViewDidEnter() {
    this.viewEntered = true;
}

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }
  
  async next() {

    this.step2 = true;
    this.slides.slideNext();
   }

selectSaleType(){
  this.forSale = true;
  this.forRent = false;

}
selectRentType(){
  this.forRent =true;
  this.forSale = false;
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


async addImage(source: CameraSource) {
  const image = await Camera.getPhoto({
    quality: 60,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    source
  });
  console.log(image)

  this.coverImage = image;
  //const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
  //const imageName = 'Give me a name';
  //this.images.push(blobData);

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
        console.log('Image URI: ' + results[i]);
        let base64Image = 'data:image/jpeg;base64,' + results[i];
        this.images.push(base64Image);
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

}
