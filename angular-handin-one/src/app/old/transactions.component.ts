import {Component} from '@angular/core';
import {Transaction, TransactionsService} from "../Services/transactions.service";
import {CreditCard, CreditcardService} from "../Services/creditcard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: any[] = [];
  filterTerm: string = '';
  filteredTransactions: Transaction[] = [];
  selectedCard: CreditCard =
    {
      card_number: 0,
      issuer: "",
      cardholder_name: "",
      csc_code: 0,
      expiration_date_month: 0,
      expiration_date_year: 0
    };
  cardList: CreditCard[] = []; // Populate this array with your card data
  newTransaction: Transaction = {
    credit_card: this.selectedCard,
    uid: '',
    amount: 0,
    comment: '',
    date: Date.now(),
    currency: '',
  };

  constructor(
    private creditCardService: CreditcardService,
    private transactionService: TransactionsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.creditCardService.getCards().subscribe((cards) => {
      this.cardList = cards;
    });

    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
      this.filteredTransactions = transactions; // default to shown all
    });
  }

  filterTransactions(filterTerm: string): void {
    this.filteredTransactions = this.transactions.filter((transaction) => {
      const searchTerm = filterTerm.toLowerCase();
      const transactionDetails = `
        ${transaction.uid} ${transaction.amount}
        ${transaction.currency} ${transaction.date}
        ${transaction.credit_card.cardholder_name}
        ${transaction.credit_card.card_number}`.toLowerCase();
      return transactionDetails.includes(searchTerm);
    });
  }

  // Delete a transaction
  onDeleteTransaction(uid: string): void {
    this.transactionService.deleteTransaction(uid).subscribe((transaction) => {
      this.transactions = this.transactions.filter((transaction) => transaction.uid !== uid);
      this.filteredTransactions = this.filteredTransactions.filter((transaction) => transaction.uid !== uid);
    });
  }

  // Method to add a new transaction
  addTransaction() {
    console.log(`Adding transaction for card ${this.selectedCard.card_number}`)
    this.newTransaction.credit_card = this.selectedCard;
    this.transactionService.postTransaction(this.newTransaction).subscribe((transaction: Transaction) => {
    });
  }
}
