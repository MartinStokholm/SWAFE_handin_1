import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home.component';
import {NavbarComponent} from './navbar.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {CreditCardModule} from "../CreditCardModule/credit-card.module";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    CreditCardModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {
}
