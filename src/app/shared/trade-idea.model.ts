import { TradeAttempt } from "./trade-attempt.model";

export class TradeIdea {
    constructor(
            public ticker: string,
            public attempts: TradeAttempt[]
        ) { }
}