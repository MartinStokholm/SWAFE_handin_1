import { Component, OnInit } from '@angular/core';
import { CreditCardService, CreditCard } from '../../Services/credit-card.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditCardComponent implements OnInit {
  cards: CreditCard[] = [];

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.creditCardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
