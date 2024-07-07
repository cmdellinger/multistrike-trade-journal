import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { DataService } from '../shared/data.service';

import { TradeIdea } from '../shared/trade-idea.model';
import { TradeAttempt } from '../shared/trade-attempt.model';

@Component({
  selector: 'app-trade-ideas',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './trade-ideas.component.html',
  styleUrl: './trade-ideas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeIdeasComponent {
  readonly panelOpenState = signal(false);
  tradeIdeas: TradeIdea[];

  constructor(private dataService: DataService) {
    this.tradeIdeas = dataService.getTradeIdeas();
  }

  ngOnInit() {
    this.tradeIdeas = this.dataService.getTradeIdeas();
    this.dataService.tradeIdeasChanged.subscribe(
      (tradeIdeas: TradeIdea[]) => {
        this.tradeIdeas = tradeIdeas;
      }
    );
  }
  
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
