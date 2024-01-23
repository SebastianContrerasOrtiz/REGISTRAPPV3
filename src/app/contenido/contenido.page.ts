import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  getData: any[]=[];

  constructor(public router: Router,public _services: ApiService) { 
    this._services.obtenerDatos<any []>("").subscribe(data => {
      this.getData = data
      console.log(this.getData);
    })
  }

  ngOnInit() {
  }

  closeHistorial(){
    this.router.navigate(['/home']);
  }

}
