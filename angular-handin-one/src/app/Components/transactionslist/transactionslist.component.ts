import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-transactionslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactionslist.component.html',
  styleUrls: ['./transactionslist.component.css']
})
export class TransactionslistComponent {
  @Input() transactions: any[] = [];
}
