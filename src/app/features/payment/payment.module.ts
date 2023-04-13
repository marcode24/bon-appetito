import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PaymentModule { }
