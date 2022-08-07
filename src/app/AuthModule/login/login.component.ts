import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { AfterViewChecked, AfterViewInit, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('loginRef', { static: false }) loginElement!: ElementRef;
  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {}
  ngOnInit() {}

  signWithEmail() {
    this.router.navigate(['login/loignwithemail']);
  }

  signin() {
    this.authService
      .callLogin(this.loginElement)
      .then((resolve) => {
        this.router.navigate(['/home']);
      })
      .catch(() => {
        console.log('Google Login Popup Colsed');
      });
  }
}
