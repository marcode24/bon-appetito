import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { OptionsPizzaComponent } from './options-pizza/options-pizza.component';
import { PreviewPizzaComponent } from './preview-pizza/preview-pizza.component';

@NgModule({
  declarations: [
    PreviewPizzaComponent,
    OptionsPizzaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PreviewPizzaComponent,
    OptionsPizzaComponent,
  ]
})
export class ComponentsModule { }
