import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditcardService, CreditCard } from '../../Services/creditcard.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  cards: CreditCard[] = [];

  constructor(
    private creditCardService: CreditcardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creditCardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }

  navigateToCardDetails(card: CreditCard): void {
    this.router.navigate(['/creditcard', card.card_number]).then(r => console.log(r));
  }
}
