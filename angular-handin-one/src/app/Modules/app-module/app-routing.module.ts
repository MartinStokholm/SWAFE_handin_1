import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {CreditcardComponent} from '../credit-card/creditcard.component';
import {CreditcardaddComponent} from '../../Components/creditcardadd.component';
import {CreditcardDetailComponent} from "../creditcard-detail/creditcard-detail.component";
import {TransactionsComponent} from "../transactions/transactions.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'creditcard', component: CreditcardComponent},
  {path: 'creditcard/add', component: CreditcardaddComponent},
  {path: 'creditcard/:card_number', component: CreditcardDetailComponent},
  {
    // TOOD Make lazy loaded module
    path: 'transactions', component: TransactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
