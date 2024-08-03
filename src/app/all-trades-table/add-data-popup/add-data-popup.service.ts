import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddDataPopupComponent } from './add-data-popup.component';

@Injectable({
  providedIn: 'root'
})
export class AddDataPopupService {
  constructor(private dialog: MatDialog) { }

  openPopup() {
    this.dialog.open(AddDataPopupComponent);
  }
}
