import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CartComponent } from "./pages/cart/cart.component";

const childRoutes: Routes = [
  {
    path: '',
    component: CartComponent,
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
export class CartRoutingModule { }
