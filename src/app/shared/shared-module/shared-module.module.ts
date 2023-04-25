import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
  ],
  exports: [],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ]
})
export class SharedModuleModule { }
