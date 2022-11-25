import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BtnBackComponent } from './btn-back/btn-back.component';
import { CounterComponent } from './counter/counter.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    BtnBackComponent,
    CounterComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnBackComponent,
    CounterComponent,
    SearchInputComponent,
  ]
})
export class SharedModule { }
