import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { ComponentsModule } from './components/components.module';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';

@NgModule({
  declarations: [
    BuildPizzaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule
  ]
})
export class BuildPizzaModule { }
