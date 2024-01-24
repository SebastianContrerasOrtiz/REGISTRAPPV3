import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailService } from 'src/app/email.service';


@Component({
  selector: 'app-ionic-component',
  templateUrl: './ionic-component.page.html',
  styleUrls: ['./ionic-component.page.scss'],
})
export class IonicComponentPage implements OnInit {

  formData = {
    user_name: '',
    user_email: '',
    message: '',
  };

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, '4v8KsyzaUFRGC6yV6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

}
