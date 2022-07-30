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
import { CollectionDetailsComponent } from './UserModule/collection-details/collection-details.component';
import { UserSettingsComponent } from './UserModule/user-settings/user-settings.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { BrwosingComponent } from './browsing/Components/brwosing/brwosing.component';
import { PantryComponent } from './PantryModule/Components/pantry/pantry.component';
import { SearchComponent } from './SerarchModule/Components/SearchComponent/search/search.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path: 'recipe/notfound',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    // pathMatch: 'full',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'home', component: HomeComponent },
      { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
      { path: 'about', component: AboutComponent },
      {
        path: 'browse',
        component: BrwosingComponent,
        canActivate: [AuthGuard],
      },
      { path: 'pantry', component: PantryComponent, canActivate: [AuthGuard] },

      {
        path: 'recipe/:recipeId',
        component: RecipeDetailsComponent,
        canActivate: [AuthGuard],
      },
      // { path: 'feed', component: FeedComponent },
      {
        path: 'user/:userId',
        component: GeneralUserComponent,
        canActivate: [AuthGuard],
      },

      { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },

      {
        path: 'profile/collections/:collectionName',
        component: CollectionDetailsComponent,
        canActivate: [AuthGuard],
      },
      { path: 'profile', pathMatch: 'full', redirectTo: 'profile/collections' },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'collections',
            component: UserCollectionsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'preferences',
            component: UserPreferencesComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'setting',
            component: UserSettingsComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
  { path: 'login/loignwithemail', component: LoginWithEmailComponent },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
