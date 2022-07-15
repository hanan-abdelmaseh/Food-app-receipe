import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*imports*/
import { SharedModule } from './SharedModule/shared.module';

/* import auth*/


import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FeedModule } from './FeedModule/feed.module';
import { HeroComponent } from './Components/hero/hero.component';



/* import auth*/


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeroComponent,
 
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  


    /* shared*/
    SharedModule,
   FeedModule,
 
   
   
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


