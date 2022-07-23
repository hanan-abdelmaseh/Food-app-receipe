import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';

@NgModule({
  declarations: [LoginComponent, LoginWithEmailComponent],
  imports: [CommonModule],
})
export class AuthModule {}
