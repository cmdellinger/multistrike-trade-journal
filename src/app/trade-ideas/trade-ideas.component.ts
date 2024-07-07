import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { TradeIdeaPanelComponent } from './trade-idea-panel/trade-idea-panel.component';

import { DataService } from '../shared/data.service';

import { TradeIdea } from '../shared/trade-idea.model';
import { TradeAttempt } from '../shared/trade-attempt.model';

@Component({
  selector: 'app-trade-ideas',
  standalone: true,
  imports: [TradeIdeaPanelComponent],
  templateUrl: './trade-ideas.component.html',
  styleUrl: './trade-ideas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeIdeasComponent {
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
}
