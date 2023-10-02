import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionslistComponent} from "../../Components/transactionslist.component";
import {FormsModule} from "@angular/forms"; // Import the component

@NgModule({
  declarations: [],
  imports: [CommonModule, TransactionslistComponent, FormsModule],
  exports: [], // Export the component
})
export class TransactionsModule {
}
