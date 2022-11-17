import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

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
