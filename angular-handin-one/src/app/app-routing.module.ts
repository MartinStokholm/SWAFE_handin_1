import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { CreditcardComponent } from './Modules/creditcard/creditcard.component';
import { TransactionsComponent } from "./Modules/transactions/transactions.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CreditCard', component: CreditcardComponent },
  { path: 'Transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
