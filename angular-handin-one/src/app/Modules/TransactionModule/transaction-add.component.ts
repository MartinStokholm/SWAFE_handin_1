import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../../Services/transactions.service';
import {CreditCard, CreditCardService} from '../../Services/credit-card.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; // Import reactive forms modules

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {
  transactionForm: FormGroup; // Define a reactive form group
  creditCards: CreditCard[] = [];

  constructor(
    private transactionService: TransactionsService,
    private creditCardService: CreditCardService,
    private router: Router,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {
    this.transactionForm = this.formBuilder.group({ // Initialize the form group
      credit_card: [null, Validators.required], // Add form controls and validators
      amount: [0, [Validators.required, Validators.min(0)]],
      comment: [''],
      date: [new Date(), Validators.required],
      currency: ['', Validators.required]
    });

    this.creditCardService.getCards().subscribe(cards => {
      this.creditCards = cards;
    });
  }

  ngOnInit() {
    this.creditCardService.getCards().subscribe((cards) => {
      this.creditCards = cards;
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const formData = {...this.transactionForm.value};
      this.transactionService.postTransaction(formData).subscribe((response) => {
        console.log(response)
        this.router.navigate(['/transaction']).then(r => console.log(r));
      });
    }
  }

  navigateToTransactions() {
    this.router.navigate(['/transaction']).then(r => console.log(r));
  }
}

