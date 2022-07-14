import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainLAyout' },
  {path:'mainLAyout' ,component:MainLayoutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
