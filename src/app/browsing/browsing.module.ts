import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrwosingComponent } from './Components/brwosing/brwosing.component';
import { SharedModule } from '../SharedModule/shared.module';



@NgModule({
  declarations: [
    BrwosingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports :[
    BrwosingComponent
  ]
})
export class BrowsingModule { }
