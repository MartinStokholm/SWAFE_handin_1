import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'credit-card',
    loadChildren: () => import('../CreditCardModule/credit-card.module').then(m => m.CreditCardModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('../TransactionModule/transaction.module').then(m => m.TransactionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
