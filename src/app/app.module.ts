import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*imports*/
import { SharedModule } from './SharedModule/shared.module';

/* import auth*/

import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { FeedModule } from './FeedModule/feed.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import auth*/
import { AuthModule } from './AuthModule/auth.module';
import { UserModule } from './UserModule/user.module';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SocialLoginModule,
    UserModule,
    FormsModule,
  ],

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
