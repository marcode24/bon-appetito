import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuildPizzaModule } from './build-pizza/build-pizza.module';
import { CartModule } from './cart/cart.module';
import { ComponentsModule } from '@components/components.module';
import { HomeModule } from './home/home.module';
import { PaymentModule } from './payment/payment.module';

import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ComponentsModule,
    HomeModule,
    BuildPizzaModule,
    CartModule,
    PaymentModule
  ]
})
export class FeaturesModule { }
