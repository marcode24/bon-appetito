import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';

import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';

@NgModule({
  declarations: [
    BuildPizzaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class BuildPizzaModule { }
