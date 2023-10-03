import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {CreditCardListComponent} from './credit-card-list.component';
import {CreditCardDetailComponent} from "./credit-card-detail.component";
import {CreditCardAddComponent} from "../../StandaloneComponents/credit-card-add.component";

const routes: Routes = [
  {path: '', component: CreditCardListComponent},
  {path: 'add', component: CreditCardAddComponent},
  {path: 'details/:card_number', component: CreditCardDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CreditCardRoutingModule {
}
