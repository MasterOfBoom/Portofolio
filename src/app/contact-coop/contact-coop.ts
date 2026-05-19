import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-coop',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './contact-coop.html',
  styleUrl: './contact-coop.css',
})
export class ContactCOOP {


  name = '';
  email = '';
  company = '';
  type = '';
  message = '';

  loading = false;

  sendMail(): void {

    if (
      !this.name ||
      !this.email ||
      !this.message
    ) {
      alert('Bitte alle Pflichtfelder ausfüllen.');
      return;
    }

    this.loading = true;

    emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      {
        name: this.name,
        email: this.email,
        company: this.company,
        type: this.type,
        message: this.message
      },
      'PUBLIC_KEY'
    ).then(() => {

      alert('Nachricht erfolgreich gesendet!');

      this.name = '';
      this.email = '';
      this.company = '';
      this.type = '';
      this.message = '';

      this.loading = false;

    }).catch(() => {

      alert('Fehler beim senden.');

      this.loading = false;

    });

  }
}
