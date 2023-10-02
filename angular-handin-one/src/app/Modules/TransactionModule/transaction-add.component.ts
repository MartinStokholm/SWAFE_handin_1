import {Component} from '@angular/core';
import {Transaction, TransactionsService} from '../../Services/transactions.service';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent {
  selectedCard: CreditCard = {
    card_number: 0,
    issuer: '',
    cardholder_name: '',
    csc_code: 0,
    expiration_date_month: 0,
    expiration_date_year: 0
  };
  cardList: CreditCard[] = [];
  newTransaction: Transaction = {
    credit_card: {
      card_number: 0,
      issuer: '',
      cardholder_name: '',
      csc_code: 0,
      expiration_date_month: 0,
      expiration_date_year: 0
    }, // Initialize it as null initially
    uid: '',
    amount: 0,
    comment: '',
    date: Date.now(),
    currency: ''
  };

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditCardService,
    private router: Router
  ) {
    this.creditCardService.getCards().subscribe(cards => {
      this.cardList = cards;
    });
  }

  // Method to set the selected card in newTransaction
  onCardSelect(selectedCard: CreditCard): void {
    this.selectedCard = selectedCard;
    this.newTransaction.credit_card = selectedCard;
  }

  addTransaction() {
    console.log(`Adding transaction for card ${this.selectedCard.card_number}`);
    this.transactionService.postTransaction(this.newTransaction).subscribe((transaction: Transaction) => {
      console.log(transaction);
      this.navigateToTransactions();
    });
  }

  navigateToTransactions() {
    this.router.navigate(['transaction']);
  }
}
