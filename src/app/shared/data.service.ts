import { EventEmitter, Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Trade } from './trade.model';
import { TradeAttempt } from './trade-attempt.model';
import { TradeIdea } from './trade-idea.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tradesChanged = new EventEmitter<Trade[]>();
  tradeIdeasChanged = new EventEmitter<TradeIdea[]>();

  private allTrades: Trade[] = [
    { id: 0, date: '2021-01-01', time: '00:01:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10000, fees: 0, total: 10000 },
    { id: 1, date: '2021-01-01', time: '00:01:30', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10100, fees: 0, total: 10100},
    { id: 2, date: '2021-01-01', time: '00:02:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10200, fees: 0, total: 10200},
    { id: 3, date: '2021-01-01', time: '00:10:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 9900},
    { id: 4, date: '2021-01-01', time: '00:10:30', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 9900},
    { id: 5, date: '2021-01-01', time: '00:11:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 9900},
    { id: 6, date: '2021-01-01', time: '05:00:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10000, fees: 0, total: 10000},
    { id: 7, date: '2021-01-01', time: '05:00:30', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10100, fees: 0, total: 10100},
    { id: 8, date: '2021-01-01', time: '05:01:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10200, fees: 0, total: 10200},
    { id: 9, date: '2021-01-01', time: '06:30:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 11000, fees: 0, total: 11000},
    { id: 10, date: '2021-01-01', time: '06:30:30', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 11100, fees: 0, total: 11100},
    { id: 11, date: '2021-01-01', time: '06:31:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 10900, fees: 0, total: 10900}
  ];

  private allTradeIdeas: TradeIdea[] = [
    { id: 0,
      ticker: 'BTCUSDT',
      attempts: [
        <TradeAttempt>{
          ticker: 'BTCUSDT',
          opens: this.allTrades.slice(0, 3),
          closes: this.allTrades.slice(3, 6)
          },
        <TradeAttempt>{
          ticker: 'BTCUSDT',
          opens: this.allTrades.slice(6, 9),
          closes: this.allTrades.slice(9, 12)
          }
      ]
    }
  ];

  getTrades() {
    return this.allTrades.slice();
  }

  addTrade(trade: Trade) {
    this.allTrades.push(trade);
    this.tradesChanged.emit(this.allTrades.slice());
  }

  addTrades(trades: Trade[]) {
    this.allTrades.push(...trades);
    this.tradesChanged.emit(this.allTrades.slice());
  }

  getTradeIdeas() {
    return this.allTradeIdeas.slice();
  }

  addTradeIdea(tradeIdea: TradeIdea) {
    this.allTradeIdeas.push(tradeIdea);
    this.tradeIdeasChanged.emit(this.allTradeIdeas.slice());
  }

  addTradeIdeas(tradeIdeas: TradeIdea[]) {
    this.allTradeIdeas.push(...tradeIdeas);
    this.tradeIdeasChanged.emit(this.allTradeIdeas.slice());
  }
}