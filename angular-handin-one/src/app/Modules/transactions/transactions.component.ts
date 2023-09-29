import {Component} from '@angular/core';
import {Transaction, TransactionsService} from "../../Services/transactions.service";
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

  constructor(
    private transactionService: TransactionsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
      this.filteredTransactions = transactions; // default to shown all
    });
  }

  filterTransactions(filterTerm: string): void {
    this.filteredTransactions = this.transactions.filter((transaction) => {
      const searchTerm = filterTerm.toLowerCase();
      const transactionDetails = `${transaction.uid} ${transaction.amount} ${transaction.currency} ${transaction.date} ${transaction.comment}`.toLowerCase();
      return transactionDetails.includes(searchTerm);
    });
  }
}
