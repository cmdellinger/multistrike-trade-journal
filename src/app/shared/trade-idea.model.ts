import { TradeAttempt } from "./trade-attempt.model";

export interface TradeIdea {
    id: number,
    ticker: string,
    attempts: TradeAttempt[]
}

export interface TradeIdeas extends Array<TradeIdea> {}