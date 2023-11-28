import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CreditCardRoutingModule} from "./credit-card-routing.module";
import {CreditCardListComponent} from './credit-card-list.component';
import {CreditCardDetailComponent} from "./credit-card-detail.component";
import {DateJoin} from "./date-join.pipe";
import {TransactionslistComponent} from "../../StandaloneComponents/transactionslist.component";
import {CreditCardService} from "../../Services/credit-card.service";
import {TransactionsService} from "../../Services/transactions.service";

@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    CreditCardRoutingModule,
    TransactionslistComponent,
    DateJoin,
  ],
  exports: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ],
  providers: [CreditCardService, TransactionsService]
})
export class CreditCardModule {
}
