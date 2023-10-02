import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionOverviewComponent} from './transaction-overview.component';
import {TransactionAddComponent} from './transaction-add.component';
import {FormsModule} from "@angular/forms";
import {TransactionslistComponent} from "../../StandaloneComponents/transactionslist.component";
import {TransactionRoutingModule} from "./transaction-routing.module";
import {TransactionsService} from "../../Services/transactions.service";
import {CreditcardService} from "../../Services/creditcard.service";

@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
    TransactionslistComponent
  ],
  providers: [TransactionsService, CreditcardService]
})
export class TransactionModule {
}
