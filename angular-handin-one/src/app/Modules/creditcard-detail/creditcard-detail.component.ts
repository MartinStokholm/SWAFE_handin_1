import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CreditCard, CreditcardService} from '../../Services/creditcard.service';
import {Transaction, TransactionsService} from '../../Services/transactions.service';

@Component({
  selector: 'app-creditcard-detail',
  templateUrl: './creditcard-detail.component.html',
  styleUrls: ['./creditcard-detail.component.css']
})
export class CreditcardDetailComponent implements OnInit {
  selectedCard: CreditCard = {} as CreditCard;
  relatedTransactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditcardService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.relatedTransactions = transactions.filter((transaction) => {
        return transaction.credit_card.card_number === this.selectedCard?.card_number;
      });
    });

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
