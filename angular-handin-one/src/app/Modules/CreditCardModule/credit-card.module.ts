import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreditCardRoutingModule} from "./credit-card-routing.module";
import {CreditCardListComponent} from './credit-card-list.component';
import {CreditCardDetailComponent} from "./credit-card-detail.component";
import {DateJoin} from "./date-join.pipe";

@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ],
  exports: [
    CreditCardListComponent,
    CreditCardDetailComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    CreditCardRoutingModule,
    DateJoin
  ]
})
export class CreditCardModule {
}
