import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

import { FeedComponent } from './FeedModule/Components/feed/feed.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainLAyout' },
  {path:'mainLAyout' ,component:MainLayoutComponent , children:[
  {path:'feed' , component:FeedComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
