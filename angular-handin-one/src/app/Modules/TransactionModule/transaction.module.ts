import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TransactionOverviewComponent} from './transaction-overview.component';
import {TransactionAddComponent} from './transaction-add.component';
import {TransactionslistComponent} from "../../StandaloneComponents/transactionslist.component";
import {TransactionRoutingModule} from "./transaction-routing.module";
import {TransactionsService} from "../../Services/transactions.service";
import {CreditCardService} from "../../Services/credit-card.service";

@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
    TransactionslistComponent,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [TransactionsService, CreditCardService]
})
export class TransactionModule {
}
