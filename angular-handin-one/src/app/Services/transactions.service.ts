import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface Transaction {
  credit_card: {
    card_number: number;
    csc_code: number;
    cardholder_name: string;
    expiration_date_month: number;
    expiration_date_year: number;
    issuer: string;
  };
  uid: string;
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

  getTransactions(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/transactions');
  }

}
