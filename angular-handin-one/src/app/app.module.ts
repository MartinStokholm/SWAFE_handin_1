import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { HomeComponent } from './Modules/home/home.component';
import { TransactionsComponent } from './Modules/transactions/transactions.component';
import { CreditCardComponent } from './Modules/creditcard/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
