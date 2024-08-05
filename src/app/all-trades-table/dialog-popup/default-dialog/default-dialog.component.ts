import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-default-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './default-dialog.component.html',
  styleUrl: './default-dialog.component.css'
})
export class DefaultDialogComponent {
  submitData() {
    // Submit data to the server
    console.log('Data submitted');
  }
}
