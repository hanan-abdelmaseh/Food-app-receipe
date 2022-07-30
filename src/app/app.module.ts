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
import { RatingModule } from 'primeng/rating';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { CurrentUserService } from './Services/Profile Services/Current-User-Service/current-user.service';
import { CollectionsService } from './Services/Profile Services/Collections-Service/collections-service.service';
import { ReviewService } from './Services/ReviewService/review-service.service';

// @NgModule({
//   declarations: [AppComponent, MainLayoutComponent, HeroComponent],
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadCrumbComponent } from './SharedModule/Components/bread-crumb/bread-crumb.component';
import { SearchComponent } from './SerarchModule/Components/SearchComponent/search/search.component';
import { SearchModule } from './SerarchModule/search.module';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeroComponent,
    AboutComponent,
    HomeComponent,
    NewsletterComponent,
    SearchComponent,
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
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    BrowsingModule,
    PantryModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    NgxPaginationModule,
    SearchModule,
    RatingModule,
  ],

  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
