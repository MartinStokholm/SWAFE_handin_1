import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { CreditcardComponen } from './Modules/CreditCard/creditcard.component';
import { TransactionsComponent } from "./Modules/transactions/transactions.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CreditCard', component: CreditcardComponen },
  { path: 'Transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
