export interface Trade {
    id: number;
    date: string;
    time: string;
    ticker: string;
    action: string;
    side: string;
    quantity: number;
    price: number;
    fees: number;
    total: number;
}

export interface Trades extends Array<Trade> {}