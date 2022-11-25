import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuildPizzaModule } from './build-pizza/build-pizza.module';
import { CartModule } from './cart/cart.module';
import { ComponentsModule } from '@components/components.module';
import { HomeModule } from './home/home.module';
import { PaymentModule } from './payment/payment.module';
import { SharedModule } from 'app/shared/shared.module';

import { FeaturesComponent } from './features.component';

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
