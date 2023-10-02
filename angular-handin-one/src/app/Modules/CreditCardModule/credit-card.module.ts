import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreditCardListComponent} from './credit-card-list.component';


@NgModule({
  declarations: [
    CreditCardListComponent
  ],
  exports: [
    CreditCardListComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class CreditCardModule {
}
