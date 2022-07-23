import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { UserProfileComponent } from './UserModule/user-profile/user-profile.component';
import { UserCollectionsComponent } from './UserModule/user-collections/user-collections.component';
import { UserPreferencesComponent } from './UserModule/user-preferences/user-preferences.component';

import { FeedComponent } from './FeedModule/Components/feed/feed.component';
import { RecipeDetailsComponent } from './SharedModule/Components/recipe-details/recipe-details.component';
import { NotFoundComponent } from './SharedModule/Components/not-found/not-found.component';
import { LoginWithEmailComponent } from './AuthModule/login-with-email/login-with-email.component';
import { GeneralUserComponent } from './SharedModule/Components/general-user/general-user.component';
import { LoginComponent } from './AuthModule/login/login.component';
import { CollectionDetailsComponent } from './UserModule/Shared Cpmponents/collection-details/collection-details.component';
import { UserSettingsComponent } from './UserModule/user-settings/user-settings.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { BrwosingComponent } from './browsing/Components/brwosing/brwosing.component';
import { PantryComponent } from './PantryModule/Components/pantry/pantry.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'home', component: HomeComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'about', component: AboutComponent },
      { path: 'browse', component: BrwosingComponent },
      { path: 'pantry', component: PantryComponent },
      { path: 'recipe/notfound', component: NotFoundComponent },
      { path: 'recipe/:recipeId', component: RecipeDetailsComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'user/:userId', component: GeneralUserComponent },

      {
        path: 'profile/collections/:collectionName',
        component: CollectionDetailsComponent,
      },
      { path: 'profile', pathMatch: 'full', redirectTo: 'profile/collections' },
      {
        path: 'profile',
        component: UserProfileComponent,
        children: [
          { path: 'collections', component: UserCollectionsComponent },
          { path: 'preferences', component: UserPreferencesComponent },
          { path: 'setting', component: UserSettingsComponent },
        ],
      },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'login/loignwithemail', component: LoginWithEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
