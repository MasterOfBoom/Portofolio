import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule, 
    MatDialogModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(
    private dialog: MatDialog
  ) {}

  openContactDialog(): void {
    this.dialog.open(Contact, {
      width: '500px',
      panelClass: 'custom-dialog'
    });
  }

}
