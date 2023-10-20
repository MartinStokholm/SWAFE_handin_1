import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Transaction} from "../Services/transactions.service";

@Component({
  selector: 'app-transactionslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactionslist.component.html',
})

export class TransactionslistComponent {
  @Input() transactions: Transaction[] = [];
  @Output() deleteTransactionEvent = new EventEmitter<string>(); // Define the event emitter
  isExpanded: boolean[] = [];

  constructor() {
    // Initialize isExpanded array with the same length as transactions, all set to false initially
    this.isExpanded = new Array(this.transactions.length).fill(false);
  }

  toggleExpand(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  deleteTransaction(uid: string): void {
    this.deleteTransactionEvent.emit(uid); // Emit the event
    console.log(`Deleting transaction with uid ${uid}`);
  }
}
