import { AfterViewInit, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  currentUser: any;
  constructor(private authService: AuthService, private router: Router) {
    console.log('login start');
  }
  ngAfterViewInit(): void {
    this.authService.googleAuthSDK(this.loginElement);
  }
  ngOnInit() {}

  signWithEmail() {
    this.router.navigate(['login/loignwithemail']);
  }
}
