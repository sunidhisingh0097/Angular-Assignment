import { NgModule } from '@angular/core';
import { Assignment1Component } from './containers/assignment1.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Assignment1Component
  ],
  exports: [
    Assignment1Component
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment1Module {

}
