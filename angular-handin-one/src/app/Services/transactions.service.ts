import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditCard} from "./credit-card.service";

export interface Transaction {
  uid: string;
  credit_card: {
    card_number: number;
    csc_code: number;
    cardholder_name: string;
    expiration_date_month: number;
    expiration_date_year: number;
    issuer: string;
  };
  amount: number;
  comment: string;
  date: number;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) {
  }

  getTransactions() {
    return this.httpClient.get<Transaction[]>('http://localhost:3000/transactions');
  }

  postTransaction(transaction: {
    date: number;
    credit_card: CreditCard;
    amount: number;
    comment: string;
    currency: string;
    selectedCreditCard?: CreditCard
  }) {
    console.log(transaction)
    return this.httpClient.post<Transaction>('http://localhost:3000/transactions', transaction);
  }

  deleteTransaction(uid: string) {
    return this.httpClient.delete<Transaction>(`http://localhost:3000/transactions/${uid}`);
  }
}
