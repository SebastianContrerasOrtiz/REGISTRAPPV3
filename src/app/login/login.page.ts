import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})                                        
export class LoginPage implements OnInit {
                                                 
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navControl: NavController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)]))
    });

    // Intenta cargar las credenciales almacenadas en el componente al iniciar la página
    const lastLoggedInUser = JSON.parse(localStorage.getItem('lastLoggedInUser')) || {};
    this.loginForm.patchValue(lastLoggedInUser);
  }

  ngOnInit() {}

  async login() {
    const f = this.loginForm.value;

    // Tu lógica de autenticación aquí

    // Ejemplo de lógica de autenticación, ajusta según tus necesidades
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.nombre === f.nombre && u.password === f.password);

    if (usuario) {
      localStorage.setItem('lastLoggedInUser', JSON.stringify({ nombre: f.nombre, password: f.password }));
      console.log('Ingresado');
      this.navControl.navigateRoot('/home');
    } else {
      this.navControl.navigateRoot('/login');

      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste no están en la base de datos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

  Registro() {
    this.router.navigate(['/registro']);  // Navega a la página de registro cuando se llama.
  }
}











