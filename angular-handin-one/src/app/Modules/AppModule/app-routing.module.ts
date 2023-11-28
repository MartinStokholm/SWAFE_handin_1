import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
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
