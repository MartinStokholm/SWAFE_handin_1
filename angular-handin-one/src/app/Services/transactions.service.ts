import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditCard} from "./credit-card.service";
import {BehaviorSubject, Observable} from "rxjs";

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
  transactionsUrl = 'http://localhost:3000/transactions';
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);

  constructor(private httpClient: HttpClient) {
    this.initTransactions();
  }

  private initTransactions() {
    this.httpClient.get<Transaction[]>(this.transactionsUrl).subscribe((transactions) => {
      this.transactionsSubject.next(transactions);
    });
  }

  getTransactions(): Observable<Transaction[]> {
    return this.transactionsSubject.asObservable();
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
    return this.httpClient.post<Transaction>(this.transactionsUrl, transaction);
  }

  deleteTransaction(uid: string) {
    return this.httpClient.delete<Transaction>(`${this.transactionsUrl}/${uid}`);
  }
}
