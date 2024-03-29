import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface CreditCard {
  card_number: number;
  csc_code: number;
  cardholder_name: string;
  expiration_date_month: number;
  expiration_date_year: number;
  issuer: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private cardUrl = 'http://localhost:3000/cards';

  constructor(private httpClient: HttpClient) {
  }

  getCards(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.cardUrl);
  }

  getCard(cardNumber: string) {
    return this.httpClient.get<CreditCard>(`${this.cardUrl}/${cardNumber}`);
  }

  postCard(card: CreditCard) {
    return this.httpClient.post(this.cardUrl, card);
  }

  deleteCard(card_number: number) {
    return this.httpClient.delete(`${this.cardUrl}/${card_number}`);
  }
}
