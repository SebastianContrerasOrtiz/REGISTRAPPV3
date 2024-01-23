import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController, public router: Router, public navCtrl: NavController) {
      this.formularioRegistro = this.fb.group ({
        nombre: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
  
        ])),      
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ]))
      })
  }

  ngOnInit() {
  }

 // registro.page.ts
async registrarse() {
  var f = this.formularioRegistro.value;

  if (this.formularioRegistro.invalid) {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Tienes que llenar todos los campos con sus datos correctos',
      buttons: ['Aceptar']
    });

    await alert.present();
    return;
  } else {
    // Almacena el usuario como una cadena JSON en el local storage
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    // Guarda el usuario en la lista de usuarios
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Actualiza los datos del último usuario registrado
    localStorage.setItem('lastLoggedInUser', JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('home');
  }
}

}
