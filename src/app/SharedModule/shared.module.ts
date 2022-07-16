import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CardComponent } from './Components/card/card.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { BreadCrumbComponent } from './Components/bread-crumb/bread-crumb.component';
import { SavingComponent } from './Components/saving/saving.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    CardComponent,
    NavbarComponent,
    BreadCrumbComponent,
    SavingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    CardComponent ,
    NavbarComponent ,
    BreadCrumbComponent,
    SavingComponent
  ]
})
export class SharedModule { }
