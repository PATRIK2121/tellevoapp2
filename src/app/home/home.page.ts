import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NavController } from '@ionic/angular';
import {ViewChild, ElementRef} from '@angular/core';


declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  map: any;

  @ViewChild('map',{read:ElementRef,static:false}) mapRef: ElementRef;

  infoWindows:any=[];
  markers:any=[];

  constructor() {}

  ionViewDidEnter(){
    this.showMap();
  }



  showMap(){
    const location= new google.maps.LatLng(-36.7953267,-73.0651477);
    const options={
      center: location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map =new google.maps.Map(this.mapRef.nativeElement,options);
  }





}
