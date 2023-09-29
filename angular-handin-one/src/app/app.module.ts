import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { HomeComponent } from './Modules/home/home.component';
import { TransactionsComponent } from './Modules/transactions/transactions.component';
import { CreditcardComponent } from './Modules/creditcard/creditcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsComponent,
    CreditcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
