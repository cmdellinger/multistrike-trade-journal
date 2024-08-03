import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-data-popup',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './add-data-popup.component.html',
  styleUrl: './add-data-popup.component.css'
})
export class AddDataPopupComponent {
  submitData() {
    // Submit data to the server
    console.log('Data submitted');
  }
}