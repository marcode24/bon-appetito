import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuildPizzaComponent } from "./pages/build-pizza/build-pizza.component";

const childRoutes: Routes = [
  {
    path: '',
    component: BuildPizzaComponent,
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
export class BuildPizzaRoutingModule { }
