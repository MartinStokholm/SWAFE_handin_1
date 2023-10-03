import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';
import {Transaction, TransactionsService} from '../../Services/transactions.service';

@Component({
  selector: 'app-creditcard-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.css'],
})
export class CreditCardDetailComponent implements OnInit {
  selectedCard: CreditCard = {} as CreditCard;
  relatedTransactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditCardService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cardNumber = params.get('card_number');
      if (cardNumber) {
        this.creditCardService.getCard(cardNumber).subscribe((card) => {
          this.selectedCard = card;
          // Call findRelatedTransactions after selectedCard is populated
          this.findRelatedTransactions(this.selectedCard.card_number);
        });
      }
    });
  }

  findRelatedTransactions(card_number: number): void {
    this.transactionService.getTransactions().subscribe((transactions: Transaction[]) => {
      this.relatedTransactions = transactions.filter((transaction) => {
        return transaction.credit_card.card_number === card_number;
      });
    });
  }

  deleteCard(card_number: number): void {
    this.creditCardService.deleteCard(card_number).subscribe((response) => {
      this.navigateToCards();
      console.log(response);
    });
  }

  protected readonly navigator = navigator;

  navigateToCards(): void {
    this.router.navigate(['']);
  }

  onDeleteTransaction($event: string): void {
    this.transactionService.deleteTransaction($event).subscribe((response) => {
      console.log(response);
    });
  }
}
