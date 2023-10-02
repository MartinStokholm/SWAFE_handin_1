import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
