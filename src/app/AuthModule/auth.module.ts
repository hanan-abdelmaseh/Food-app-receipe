import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginWithEmailComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AuthModule {}
