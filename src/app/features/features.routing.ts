import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    loadChildren: () => import('./home/home.routing').then(m => m.HomeRoutingModule),
  },
  {
    path: 'build',
    component: FeaturesComponent,
    data: { animation: 'bottom' },
    loadChildren: () => import('./build-pizza/build-pizza.routing').then(m => m.BuildPizzaRoutingModule),
  },
  {
    path: 'cart',
    component: FeaturesComponent,
    data: { animation: 'bottom' },
    loadChildren: () => import('./cart/cart.routing').then(m => m.CartRoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class FeaturesRoutingModule { }
