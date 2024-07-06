import { Trade } from "./trade.model";

export class TradeAttempt {
    constructor(
            public ticker: string,
            public opens: Trade[],
            public closes: Trade[]
        ) { }
}