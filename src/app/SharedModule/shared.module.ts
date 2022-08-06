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
import { SavingComponent } from './Components/saving/saving.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadCrumbComponent } from './Components/bread-crumb/bread-crumb.component';
import { RatingModule } from 'primeng/rating';
import { RatingBuilderComponent } from './Components/RatingBuilder/rating-builder/rating-builder.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { SearchNotFoundComponent } from './Components/search-not-found/search-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { StarRatingBuilderComponent } from './Components/StartRatingBuilder/star-rating-builder/star-rating-builder.component';

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
    FooterComponent,
    RatingBuilderComponent,
    SearchNotFoundComponent,
    StarRatingComponent,
    SpinnerComponent,
    StarRatingBuilderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RatingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    CardComponent,
    NavbarComponent,
    BreadCrumbComponent,
    SavingComponent,
    FooterComponent,
    BreadCrumbComponent,
    SearchNotFoundComponent,
    StarRatingComponent,
    SpinnerComponent,
    StarRatingBuilderComponent,
  ],
})
export class SharedModule {}
