import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Trade } from '../../../shared/trade.model';
import { DataService } from '../../../shared/data.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-data-dialog',
  standalone: true,
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule],
  templateUrl: './add-data-dialog.component.html',
  styleUrl: './add-data-dialog.component.css'
})
export class AddDataDialogComponent {

  constructor(private dataService: DataService) { }

  numericNumberReg: string = '^-?[0-9]\\d*(\\.\\d{1,2})?$';

  form = new FormGroup({
    id: new FormControl(this.dataService.totalTrades()),
    date: new FormControl('2012-12-12',
      {validators: [Validators.required]}
    ),
    time: new FormControl('00:00:00',
      {validators: [Validators.required]}
    ),
    ticker: new FormControl('ticker',
      {validators: [Validators.required]}
    ),
    action: new FormControl('action',
      {validators: [Validators.required, Validators.pattern(/^(buy|sell)$/)]}
    ),
    quantity: new FormControl('0',
      {validators: [Validators.required, Validators.pattern(this.numericNumberReg)]}
    ),
    price: new FormControl('0',
      {validators: [Validators.required, Validators.pattern(this.numericNumberReg)]}
    ),
    fees: new FormControl('0',
      {validators: [Validators.required, Validators.pattern(this.numericNumberReg)]}
    )
  });

  submitData() {
    const newTrade: Trade = {
      id: this.form.value.id!,
      date: this.form.value.date!,
      time: this.form.value.time!,
      ticker: this.form.value.ticker!,
      action: this.form.value.action!,
      quantity: parseFloat(this.form.value.quantity!),
      price: parseFloat(this.form.value.price!),
      fees: parseFloat(this.form.value.fees!),
      total: parseFloat(this.form.value.quantity!) * parseFloat(this.form.value.price!) + parseFloat(this.form.value.fees!),
    };
    console.log(newTrade);
    this.dataService.addTrade(newTrade);
  }
}
