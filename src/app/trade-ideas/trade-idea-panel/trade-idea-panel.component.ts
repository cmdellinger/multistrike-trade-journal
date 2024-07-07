import { ChangeDetectionStrategy, Component, signal, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { TradeAttemptTableComponent } from './trade-attempt-table/trade-attempt-table.component';

import { TradeIdea } from '../../shared/trade-idea.model';
import { TradeAttempt } from '../../shared/trade-attempt.model';

@Component({
  selector: 'app-trade-idea-panel',
  standalone: true,
  imports: [MatExpansionModule, TradeAttemptTableComponent],
  templateUrl: './trade-idea-panel.component.html',
  styleUrl: './trade-idea-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeIdeaPanelComponent {
  @Input() tradeIdea!: TradeIdea;
  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['date', 'time', 'action', 'quantity', 'price', 'fees', 'total'];
  // tradeAttemptPnLs: number[] = this.tradeIdea.attempts.map((tradeAttempt) => this.tradeAttemptPnl(tradeAttempt));

  tradeAttemptPnl(tradeAttempt: TradeAttempt) {
    let opens = tradeAttempt.opens
      .map((trade) => trade.total)
      .reduce((acc, trade) => acc + trade, 0);
    let closes = tradeAttempt.closes
      .map((trade) => trade.total)
      .reduce((acc, trade) => acc + trade, 0);
    return (closes - opens);
  }

  isTradeAttemptProfitable(tradeAttempt: TradeAttempt) {
    return this.tradeAttemptPnl(tradeAttempt) > 0;
  }

}
