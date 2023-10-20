import {Component} from '@angular/core';
import {Transaction, TransactionsService} from "../../Services/transactions.service";
import {CreditCard, CreditCardService} from "../../Services/credit-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
})
export class TransactionOverviewComponent {

  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  filterTerm: string = '';
  cards: CreditCard[] = [];

  constructor(
    private transactionService: TransactionsService,
    private creditcardService: CreditCardService,
    private router: Router
  ) {
    this.creditcardService.getCards().subscribe((cards) => {
      this.cards = cards;
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
        ${transaction.uid}
        ${transaction.amount}
        ${transaction.comment}
        ${transaction.currency}
        ${transaction.date}
        ${transaction.credit_card.cardholder_name}
        ${transaction.credit_card.card_number}`.toLowerCase();
      return transactionDetails.includes(searchTerm);
    });
  }

  // Delete a transaction
  onDeleteTransaction(uid: string): void {
    this.transactionService.deleteTransaction(uid).subscribe((transaction) => {
      this.filteredTransactions = this.filteredTransactions.filter((transaction) => transaction.uid !== uid);
    });
  }
}
