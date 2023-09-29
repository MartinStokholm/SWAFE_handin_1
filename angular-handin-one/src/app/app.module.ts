import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { HomeComponent } from './Modules/home/home.component';
import { TransactionsComponent } from './Modules/transactions/transactions.component';
import { CreditCardComponent } from './Modules/creditcard/creditcard.component';
import { CreditcardDetailComponent } from './Modules/creditcard-detail/creditcard-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsComponent,
    CreditCardComponent,
    CreditcardDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
