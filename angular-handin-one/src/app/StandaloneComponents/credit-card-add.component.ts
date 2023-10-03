import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditCard, CreditCardService} from "../Services/credit-card.service";
import {Router} from "@angular/router";
import {TransactionModule} from "../Modules/TransactionModule/transaction.module";

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule, TransactionModule],
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent {

  formData: CreditCard = {} as CreditCard;

  constructor(
    private creditCardService: CreditCardService,
    private router: Router) {
  }

  onSubmit() {
    this.creditCardService.postCard(this.formData).subscribe((response) => {
      console.log(response);
      this.formData = {
        card_number: 0,
        csc_code: 0,
        cardholder_name: "",
        expiration_date_month: 0,
        expiration_date_year: 0,
        issuer: ""
      }
    });
  }

  navigateToCards() {
    this.router.navigate([''])
      .then(r => console.log(r));
  }
}
