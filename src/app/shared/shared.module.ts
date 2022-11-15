import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter/counter.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchInputComponent,
    CounterComponent
  ]
})
export class SharedModule { }
