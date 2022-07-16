import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantryComponent } from './Components/pantry/pantry.component';
import { SharedModule } from '../SharedModule/shared.module';



@NgModule({
  declarations: [
    PantryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports :[
    PantryComponent
  ]
})
export class PantryModule { }
