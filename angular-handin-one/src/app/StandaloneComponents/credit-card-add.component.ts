import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditCard, CreditCardService} from "../Services/credit-card.service";
import {Router} from "@angular/router";
import {TransactionModule} from "../Modules/TransactionModule/transaction.module";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule, TransactionModule, ReactiveFormsModule],
  templateUrl: './credit-card-add.component.html',
  styleUrls: []
})
export class CreditCardAddComponent {

  formData: CreditCard = {} as CreditCard;
  creditCardForm: FormGroup;

  constructor(
    private creditCardService: CreditCardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.creditCardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(7), Validators.maxLength(16)]],
      cardholderName: ['', [Validators.required]],
      cscCode: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(3), Validators.minLength(3)]],
      expirationDateMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      expirationDateYear: ['', [Validators.required, Validators.min(2020), Validators.max(2069)]],
      issuer: [''],
    });
  }

  onSubmit() {
    if (this.creditCardForm.valid) {
      const cardNumber = this.creditCardForm.get('cardNumber')?.value;
      const cscCode = this.creditCardForm.get('cscCode')?.value;
      const cardholderName = this.creditCardForm.get('cardholderName')?.value;
      const expirationDateMonth = this.creditCardForm.get('expirationDateMonth')?.value;
      const expirationDateYear = this.creditCardForm.get('expirationDateYear')?.value;
      const issuer = this.creditCardForm.get('issuer')?.value;

      if (cardNumber !== null && cscCode !== null && cardholderName !== null &&
        expirationDateMonth !== null && expirationDateYear !== null && issuer !== null) {

        this.formData = {
          card_number: cardNumber,
          csc_code: cscCode,
          cardholder_name: cardholderName,
          expiration_date_month: expirationDateMonth,
          expiration_date_year: expirationDateYear,
          issuer: issuer
        };

        this.creditCardService.postCard(this.formData).subscribe((response) => {
          console.log(response);
          this.creditCardForm.reset();
        });

        this.router.navigate([''])
          .then(r => console.log(r));
      }
    }
  }

  navigateToCards() {
    this.router.navigate([''])
      .then(r => console.log(r));
  }
}
