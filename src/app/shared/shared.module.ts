import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BtnHomeComponent } from './btn-home/btn-home.component';
import { CounterComponent } from './counter/counter.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    BtnHomeComponent,
    CounterComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnHomeComponent,
    CounterComponent,
    SearchInputComponent,
  ]
})
export class SharedModule { }
