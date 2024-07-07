import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { Trade } from '../../../shared/trade.model';

@Component({
  selector: 'app-trade-attempt-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './trade-attempt-table.component.html',
  styleUrl: './trade-attempt-table.component.css'
})
export class TradeAttemptTableComponent {
  @Input() trades!: Trade[];

  displayedColumns: string[] = ['date', 'time', 'action', 'quantity', 'price', 'fees', 'total'];
}
