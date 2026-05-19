import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { Contact } from '../contact/contact';
import { ContactCOOP } from '../contact-coop/contact-coop';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
    private dialog: MatDialog
  ) {}

  openContactDialog(): void {
    this.dialog.open(Contact, {
      width: '500px',
      panelClass: 'custom-dialog'
    });
  }

  openContactCOOPDialog(): void {
        this.dialog.open(ContactCOOP, {
      panelClass: 'custom-dialog'
    });
  }

}