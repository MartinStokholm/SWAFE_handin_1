import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CreditCard, CreditCardService} from "../Services/credit-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent {
  formData: CreditCard = {
    card_number: 12345678910,
    csc_code: 420,
    cardholder_name: "aName",
    expiration_date_month: 1,
    expiration_date_year: 12,
    issuer: "aCardProvider"
  };

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
