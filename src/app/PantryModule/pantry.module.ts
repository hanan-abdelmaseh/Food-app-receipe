import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantryComponent } from './Components/pantry/pantry.component';
import { SharedModule } from '../SharedModule/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnakBarComponent } from './Components/snak-bar/snak-bar.component';

@NgModule({
  declarations: [PantryComponent, SnakBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
  ],
  exports: [PantryComponent],
})
export class PantryModule {}
