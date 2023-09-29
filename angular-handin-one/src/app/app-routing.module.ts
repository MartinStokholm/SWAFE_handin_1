import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { CreditcardComponent } from './Modules/creditcard/creditcard.component';
import { CreditcardDetailComponent} from "./Modules/creditcard-detail/creditcard-detail.component";
import { TransactionsComponent } from "./Modules/transactions/transactions.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creditcard', component: CreditcardComponent },
  { path: 'creditcard/:card_number', component: CreditcardDetailComponent },
  { path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
