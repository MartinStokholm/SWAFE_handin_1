import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditcardService, CreditCard } from '../../Services/creditcard.service';
@Component({
  selector: 'app-creditcard-detail',
  templateUrl: './creditcard-detail.component.html',
  styleUrls: ['./creditcard-detail.component.css']
})
export class CreditcardDetailComponent implements  OnInit{
  selectedCard: CreditCard | undefined = undefined;

  constructor(
    private creditCardService: CreditcardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cardNumber = params.get('card_number');
      if (cardNumber) {
        this.creditCardService.getCard(cardNumber).subscribe((card) => {
          this.selectedCard = card;
        });
      }
    });
  }
}
