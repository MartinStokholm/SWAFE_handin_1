import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

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

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted with data:', this.formData);
  }
}
