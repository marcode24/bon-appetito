import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { ComponentsModule } from '@components/components.module';

import { BuildPizzaModule } from './build-pizza/build-pizza.module';
import { CartModule } from './cart/cart.module';
import { FeaturesComponent } from './features.component';
import { HomeModule } from './home/home.module';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BuildPizzaModule,
    CartModule,
    CommonModule,
    ComponentsModule,
    HomeModule,
    PaymentModule,
    RouterModule,
    SharedModule
  ]
})
export class FeaturesModule { }
