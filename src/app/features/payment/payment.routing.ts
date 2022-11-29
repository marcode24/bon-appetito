import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PaymentComponent } from "./pages/payment/payment.component";

const childRoutes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PaymentRoutingModule { }
