import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { TransactionsComponent } from "./transactions/transactions.component";

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
