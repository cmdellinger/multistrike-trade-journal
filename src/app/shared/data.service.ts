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

  private allTrades: Trade[] = [
    { id: 0, date: '2021-01-01', time: '00:01:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10000, fees: 0, total: 10000 },
    { id: 1, date: '2021-01-01', time: '00:01:30', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10100, fees: 0, total: 10000},
    { id: 2, date: '2021-01-01', time: '00:02:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10200, fees: 0, total: 10000},
    { id: 3, date: '2021-01-01', time: '00:10:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 10000},
    { id: 4, date: '2021-01-01', time: '00:10:30', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 10000},
    { id: 5, date: '2021-01-01', time: '00:11:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 9900, fees: 0, total: 10000},
    { id: 6, date: '2021-01-01', time: '05:00:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10000, fees: 0, total: 10000},
    { id: 7, date: '2021-01-01', time: '05:00:30', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10100, fees: 0, total: 10000},
    { id: 8, date: '2021-01-01', time: '05:01:00', ticker: 'BTCUSDT', action: 'buy', quantity: 1, price: 10200, fees: 0, total: 10000},
    { id: 9, date: '2021-01-01', time: '06:30:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 11000, fees: 0, total: 10000},
    { id: 10, date: '2021-01-01', time: '06:30:30', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 11100, fees: 0, total: 10000},
    { id: 11, date: '2021-01-01', time: '06:31:00', ticker: 'BTCUSDT', action: 'sell', quantity: 1, price: 10900, fees: 0, total: 10000}
  ];

  // let mockTradeIdea = new TradeIdea(
  //   ticker: 'BTCUSDT',
  //   attempts: [
  //     new TradeAttempt(
  //       ticker: 'BTCUSDT',
  //       opens: mockAllTrades.slice(0, 3),
  //       closes: mockAllTrades.slice(3, 6)
  //     ),
  //     new TradeAttempt(
  //       ticker: 'BTCUSDT',
  //       opens: mockAllTrades.slice(6, 9),
  //       closes: mockAllTrades.slice(9, 12)
  //     )
  //   ]
  // );

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

}