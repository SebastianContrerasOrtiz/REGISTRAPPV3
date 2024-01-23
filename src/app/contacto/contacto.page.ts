import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage {

  public formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  enviarCorreo() {
    // Evitar el envío si el formulario no es válido
    if (this.formData.invalid) {
      console.log('Formulario no válido. Verifica los campos.');
      return;
    }

    // Utilizar this.formData.value para obtener los valores del formulario
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.formData.value, 'YOUR_PUBLIC_KEY')
      .then((result: any) => {
        console.log(result.text);
        // Resto de la lógica después de enviar el correo...
      }, (error: any) => {
        console.log(error.text);
        // Resto de la lógica en caso de error...
      });
  }
}




