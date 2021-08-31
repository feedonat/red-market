
import { Injectable, NgZone } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, Coordinates } from '@ionic-native/geolocation/ngx';
import { firestore } from 'firebase';
//import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {


  private lastPosition: Geoposition;
  private reversedAddress;
  private lat;
  private lng;
  constructor(private geolocation: Geolocation,private zone: NgZone) {}
  protected geocoder: google.maps.Geocoder; 
  protected map: google.maps.Map;
  async getCurrentPosition(): Promise<Coordinates> {

    let position = null;

    if (this.lastPosition) {
      const diff = new Date().getTime() - this.lastPosition.timestamp;
      const minutesDifference = Math.floor(diff / 1000 / 60);
      if (minutesDifference <= 15) return this.lastPosition.coords;
    }

    try {

      const options: GeolocationOptions = {
        enableHighAccuracy: false,
        timeout: 5000, // 5 sec
        maximumAge: 15 * 60 * 1000, // 15 minutes
      };

      position = await this.geolocation.getCurrentPosition(options);
      this.lastPosition = position;
    } catch (error) {
      position = this.lastPosition;
    }
    return position ? position.coords : null;
  }

  toParseGeoPoint(coords: Coordinates): firebase.firestore.GeoPoint {
    return  new firestore.GeoPoint(coords.latitude, coords.longitude)
  }

  public locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude; // Works fine
          this.lng = position.coords.longitude;  // Works fine

          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.lat, this.lng);
          let request = {
            latLng: latlng
          };

          geocoder.geocode({'location':latlng}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {
                this.reversedAddress = results[0].formatted_address.split(",");  //<<<=== DOES NOT WORK, when I output this {{ address }} in the html, it's empty
                console.log(this.reversedAddress);  //<<<=== BUT here it Prints the correct value to the console !!!
              } else {
                alert("No address available");
              }
            }
          });
        },
        error => {
          console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
        }
      );
    }
  }

   
  }

  
