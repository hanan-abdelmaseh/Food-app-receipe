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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainLAyout' },
  { path: 'mainLAyout', component: MainLayoutComponent },
 
  { path: 'home', component: FeedComponent },
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
