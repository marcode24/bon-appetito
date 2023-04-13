import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
