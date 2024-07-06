import { TradeAttempt } from "./trade_attempt.model";

export class TradeIdea {
    constructor(
            public ticker: string,
            public attempts: TradeAttempt[]
        ) { }
}