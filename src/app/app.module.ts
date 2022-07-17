import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*imports*/
import { SharedModule } from './SharedModule/shared.module';

/* import auth*/

import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FeedModule } from './FeedModule/feed.module';
import { HeroComponent } from './Components/hero/hero.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import auth*/
import { AuthModule } from './AuthModule/auth.module';
import { UserModule } from './UserModule/user.module';
import { BrowsingModule } from './browsing/browsing.module';
import { PantryModule } from './PantryModule/pantry.module';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({

  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeroComponent,
    AboutComponent,
    HomeComponent,
    

   
 
   
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* shared*/
    AuthModule,
    SocialLoginModule,
    UserModule,
    FeedModule,
    FormsModule,
    SharedModule,
    BrowsingModule,
    PantryModule

  ],exports:[
    
  ]
  ,
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('clientId'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
