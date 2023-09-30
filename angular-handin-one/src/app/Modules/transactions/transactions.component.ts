import {Component} from '@angular/core';
import {Transaction, TransactionsService} from "../../Services/transactions.service";
import {CreditcardService} from "../../Services/creditcard.service";
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
  showTransaction: boolean = false;
  selectedCard: any; // You need to define the type for selectedCard
  cardList: any[] = []; // Populate this array with your card data
  newTransaction: Transaction = {
    credit_card: {
      card_number: 0, // Initialize with default values
      csc_code: 0,
      cardholder_name: '',
      expiration_date_month: 0,
      expiration_date_year: 0,
      issuer: '',
    },
    uid: '',
    amount: 0,
    comment: '',
    date: 0,
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

  // Method to show the transaction form
  showTransactionForm() {
    this.showTransaction = true;
  }

  // Method to add a new transaction
  addTransaction() {
    this.transactionService.postTransaction(this.newTransaction).subscribe((transaction: Transaction) => {
    });

    // Reset the form
    this.newTransaction = {
      credit_card: {
        card_number: 0,
        csc_code: 0,
        cardholder_name: '',
        expiration_date_month: 0,
        expiration_date_year: 0,
        issuer: '',
      },
      uid: '',
      amount: 0,
      comment: '',
      date: 0,
      currency: '',
    };

    // Hide the form
    this.showTransaction = false;
  }

  // Method to cancel adding a transaction
  cancelTransaction() {
    // Reset the form
    this.newTransaction = {
      credit_card: {
        card_number: 0,
        csc_code: 0,
        cardholder_name: '',
        expiration_date_month: 0,
        expiration_date_year: 0,
        issuer: '',
      },
      uid: '',
      amount: 0,
      comment: '',
      date: 0,
      currency: '',
    };

    // Hide the form
    this.showTransaction = false;
  }
}
