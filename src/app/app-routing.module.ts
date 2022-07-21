import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { UserProfileComponent } from './UserModule/user-profile/user-profile.component';
import { UserCollectionsComponent } from './UserModule/user-collections/user-collections.component';
import { UserPreferencesComponent } from './UserModule/user-preferences/user-preferences.component';

import { FeedComponent } from './FeedModule/Components/feed/feed.component';
import { LoginComponent } from './AuthModule/login/login.component';
import { CollectionDetailsComponent } from './UserModule/Shared Cpmponents/collection-details/collection-details.component';
import { UserSettingsComponent } from './UserModule/user-settings/user-settings.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { BrwosingComponent } from './browsing/Components/brwosing/brwosing.component';
import { PantryComponent } from './PantryModule/Components/pantry/pantry.component';
import { ReceipeComponent } from './ReceipesModule/Components/receipe/receipe.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainLAyout' },
    { path: 'mainLAyout', component: MainLayoutComponent , 
    children:[ 
      { path: 'home', component: HomeComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'about', component: AboutComponent },
      {path:'receipe' ,component:ReceipeComponent},
      { path: 'browse', component: BrwosingComponent},
      {path:'pantry' , component:PantryComponent}
  ]},
 
 
  
 
 
  { path: 'login', component: LoginComponent },
  {
    path: 'profile/collections/:collectionName',
    component: CollectionDetailsComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    children: [
      { path: 'collections', component: UserCollectionsComponent },
      { path: 'preferences', component: UserPreferencesComponent },
      { path: 'setting', component: UserSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
