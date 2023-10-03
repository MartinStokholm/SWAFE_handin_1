import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../../Services/transactions.service';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";

class TransactionFormModel {
  credit_card: CreditCard = {} as CreditCard;
  amount: number = 0;
  comment: string = '';
  date: number = Date.now();
  currency: string = '';
}


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {
  transactionFormModel: TransactionFormModel;
  creditCards: CreditCard[] = [];

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {...this.transactionFormModel};
      // Now you can use formData to send the form data to your server, including the selected credit card.
      this.transactionService.postTransaction(formData).subscribe((response) => {
        console.log(response)
        this.router.navigate(['/transaction']).then(r => console.log(r));
      });
    }
  }
}
