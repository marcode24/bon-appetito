import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BuildPizzaModule } from './build-pizza/build-pizza.module';
import { CartModule } from './cart/cart.module';
import { ComponentsModule } from '@components/components.module';
import { HomeModule } from './home/home.module';

import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeModule,
    BuildPizzaModule,
    CartModule
  ]
})
export class FeaturesModule { }
