import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './pages/cart/cart.component';

import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
