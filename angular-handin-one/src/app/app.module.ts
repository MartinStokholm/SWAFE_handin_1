import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Modules/navbar/navbar.component';
import {HomeComponent} from './Modules/home/home.component';
import {TransactionsComponent} from './Modules/transactions/transactions.component';
import {CreditcardComponent} from './Modules/creditcard/creditcard.component';
import {CreditcardDetailComponent} from './Modules/creditcard-detail/creditcard-detail.component';
import {TransactionslistComponent} from "./Components/transactionslist/transactionslist.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsComponent,
    CreditcardComponent,
    CreditcardDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TransactionslistComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
