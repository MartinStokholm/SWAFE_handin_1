import {Component, OnInit} from '@angular/core';
import {Transaction, TransactionsService} from '../../Services/transactions.service';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";

class TransactionFormModel {
  credit_card: CreditCard = {} as CreditCard;
  amount: number = 0;
  comment: string = '';
  date: number = Date.now();
  currency: string = '';
  selectedCreditCard?: CreditCard = {} as CreditCard;
}


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {
  transactionFormModel: TransactionFormModel;
  selectedCard: CreditCard = {} as CreditCard;
  creditCards: CreditCard[] = [];
  newTransaction: Transaction = {
    uid: '',
    credit_card: this.selectedCard,
    amount: 0,
    comment: '',
    date: Date.now(),
    currency: '',
  }

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditCardService,
    private router: Router
  ) {
    this.transactionFormModel = new TransactionFormModel();
    this.creditCardService.getCards().subscribe(cards => {
      this.creditCards = cards;
    });
  }

  ngOnInit() {
    this.creditCardService.getCards().subscribe((cards) => {
      this.creditCards = cards;
    });
  }

  // Method to set the selected card in newTransaction
  onCardSelect(): void {
    this.newTransaction.credit_card = this.selectedCard;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {...this.transactionFormModel};

      // Now you can use formData to send the form data to your server, including the selected credit card.
      console.log(formData.selectedCreditCard);
      this.transactionService.postTransaction(formData).subscribe(() => {
        this.router.navigate(['transaction']);
      });
    }
  }

  navigateToTransactions() {
    this.router.navigate(['transaction']);
  }
}
