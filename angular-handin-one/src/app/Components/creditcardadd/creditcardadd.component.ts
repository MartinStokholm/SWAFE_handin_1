import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CreditcardService} from "../../Services/creditcard.service";

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creditcardadd.component.html',
  styleUrls: ['./creditcardadd.component.css']
})
export class CreditcardaddComponent {
  formData = {
    cardNumber: null,
    cardholderName: '',
    cscCode: null,
    expirationDateMonth: null,
    expirationDateYear: null,
    issuer: ''
  };

  constructor(private creditCardService: CreditcardService) {
  }

  onSubmit() {
    // Call postCard() from the CreditcardService
    this.creditCardService.postCard(this.formData).subscribe((response) => {
      console.log(response);
    });
  }
}
