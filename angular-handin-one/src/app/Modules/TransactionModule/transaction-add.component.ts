import {Component} from '@angular/core';
import {Transaction, TransactionsService} from "../../Services/transactions.service";
import {CreditCard, CreditcardService} from "../../Services/creditcard.service";

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent {
  selectedCard: CreditCard =
    {
      card_number: 0,
      issuer: "",
      cardholder_name: "",
      csc_code: 0,
      expiration_date_month: 0,
      expiration_date_year: 0
    };
  cardList: CreditCard[] = [];
  newTransaction: Transaction = {
    credit_card: this.selectedCard,
    uid: '',
    amount: 0,
    comment: '',
    date: Date.now(),
    currency: '',
  };

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditcardService
  ) {
    this.creditCardService.getCards().subscribe((cards) => {
      this.cardList = cards;
    });
  }

  addTransaction() {
    console.log(`Adding transaction for card ${this.selectedCard.card_number}`)
    this.newTransaction.credit_card = this.selectedCard;
    this.transactionService.postTransaction(this.newTransaction).subscribe((transaction: Transaction) => {
    });
  }
}
