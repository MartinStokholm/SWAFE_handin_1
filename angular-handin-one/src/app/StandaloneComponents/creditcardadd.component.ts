import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CreditCard, CreditcardService} from "../Services/creditcard.service";

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creditcardadd.component.html',
  styleUrls: ['./creditcardadd.component.css']
})
export class CreditcardaddComponent {
  formData: CreditCard = {
    card_number: 12345678910,
    csc_code: 420,
    cardholder_name: "aName",
    expiration_date_month: 1,
    expiration_date_year: 12,
    issuer: "aCardProvider"
  };

  constructor(private creditCardService: CreditcardService) {
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
}
