import { NextTx } from "./nextTx";

export interface TransactionDetailEntry {
    address?: string;
    category?: string;
    amount?: number;
    label?: string;
    vout?: number;
    nexttx?: NextTx; //add other types
    fee?: number;
}
