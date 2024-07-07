import { Trade } from "./trade.model";

export interface TradeAttempt {
    ticker: string,
    opens: Trade[],
    closes: Trade[]
}

export interface TradeAttempts extends Array<TradeAttempt> {}