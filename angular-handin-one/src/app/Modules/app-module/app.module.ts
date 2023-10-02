import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {CreditcardComponent} from '../credit-card/creditcard.component';
import {CreditcardDetailComponent} from '../creditcard-detail/creditcard-detail.component';
import {TransactionslistComponent} from "../../Components/transactionslist.component";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {DateJoinPipe} from '../../date-join.pipe';
import {TransactionsComponent} from "../transactions/transactions.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsComponent,
    CreditcardComponent,
    CreditcardDetailComponent,
    DateJoinPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TransactionslistComponent,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
