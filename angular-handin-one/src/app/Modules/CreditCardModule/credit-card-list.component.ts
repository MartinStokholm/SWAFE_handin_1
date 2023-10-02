import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {
  cards: CreditCard[] = [];

  constructor(
    private creditCardService: CreditCardService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.creditCardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }

  navigateToCardDetails(card: CreditCard): void {
    this.router.navigate(['/details', card.card_number])
      .then(r => console.log(r));
  }
}
