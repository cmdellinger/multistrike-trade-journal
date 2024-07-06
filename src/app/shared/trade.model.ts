export interface Trade {
    id: number;
    date: string;
    time: string;
    ticker: string;
    action: string;
    quantity: number;
    price: number;
    fees: number;
    total: number;
}

export interface Trades extends Array<Trade> {}