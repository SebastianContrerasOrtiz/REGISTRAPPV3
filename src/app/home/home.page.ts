import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  usuario: any;

  token = localStorage.getItem("token");

  constructor(private barcodeScanner: BarcodeScanner, public router: Router, public navCtrl: NavController) {}

  ngOnInit() {
    console.log("token: ", this.token);
    localStorage.removeItem("token");
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  logout(){
    //localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }

}
