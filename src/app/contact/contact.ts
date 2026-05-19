import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    MatDialogModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name = '';
  email = '';
  message = '';


  //  https://dashboard.emailjs.com?utm_source=chatgpt.com Create Account to set an email Target

  sendMail(): void {

    emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      {
        from_name: this.name,
        from_email: this.email,
        message: this.message
      },
      'PUBLIC_KEY'
    ).then(() => {

      alert('Nachricht gesendet!');

      this.name = '';
      this.email = '';
      this.message = '';

    }).catch(() => {
      alert('Fehler beim senden!');
    });

  }

}