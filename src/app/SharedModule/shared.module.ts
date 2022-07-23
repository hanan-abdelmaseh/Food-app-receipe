import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CardComponent } from './Components/card/card.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CarusalComponent } from './Components/carusal/carusal.component';
import { GeneralUserComponent } from './Components/general-user/general-user.component';
import { BreadCrumbComponent } from './Components/bread-crumb/bread-crumb.component';
import { SavingComponent } from './Components/saving/saving.component';
import { SearchComponent } from './Components/search/search.component';
import { FilterComponent } from './Components/filter/filter.component';
import { CarsolComponent } from './Components/carsol/carsol.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NextDirective } from './Components/directives/next.directive';
import { PrevDirective } from './Components/directives/prev.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    CardComponent,
    NavbarComponent,
    RecipeDetailsComponent,
    NotFoundComponent,
    CarusalComponent,
    GeneralUserComponent,
    BreadCrumbComponent,
    SavingComponent,
    SearchComponent,
    FilterComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    CardComponent,
    NavbarComponent,
    BreadCrumbComponent,
    SearchComponent,
    FilterComponent,
    SavingComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
