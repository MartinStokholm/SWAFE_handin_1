import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {TransactionAddComponent} from "./transaction-add.component";
import {TransactionOverviewComponent} from "./transaction-overview.component";

const routes: Routes = [
  {path: '', component: TransactionOverviewComponent},
  {path: 'add', component: TransactionAddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class TransactionRoutingModule {
}
