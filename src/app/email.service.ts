import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm('contact_service', 'contact_form', form, '4v8KsyzaUFRGC6yV6');
  }

  constructor() { }
}
