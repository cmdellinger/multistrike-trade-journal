import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DefaultDialogComponent } from './default-dialog/default-dialog.component';
import { AddDataDialogComponent } from './add-data-dialog/add-data-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogPopupService {
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddDataDialogComponent);
  }

}
