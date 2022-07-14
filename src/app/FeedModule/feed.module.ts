import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './Components/feed/feed.component';
import { SharedModule } from '../SharedModule/shared.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeedComponent
  ],

})
export class FeedModule { }
