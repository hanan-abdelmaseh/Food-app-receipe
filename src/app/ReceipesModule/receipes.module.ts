import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceipeComponent } from './Components/receipe/receipe.component';
import { SharedModule } from '../SharedModule/shared.module';



@NgModule({
  declarations: [
    ReceipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   
  ]
})
export class ReceipesModule { }
