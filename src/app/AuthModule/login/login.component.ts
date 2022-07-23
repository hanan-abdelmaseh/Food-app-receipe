import { AfterViewInit, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
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
  constructor(private authService: AuthService) {
    console.log(this.currentUser);
  }
  ngAfterViewInit(): void {}
  ngOnInit() {
    this.authService.googleAuthSDK(this.loginElement);
  }

  // callLogin() {
  //   this.auth2.attachClickHandler(
  //     this.loginElement.nativeElement,
  //     {},
  //     (googleAuthUser: any) => {
  //       //Print profile details in the console logs

  //       let profile = googleAuthUser.getBasicProfile();
  //       this.userService.currentUser.id = profile.getId();
  //       console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //     }
  //     // (error: any) => {
  //     //   alert(JSON.stringify(error, undefined, 2));
  //     // }
  //   );
  // }

  // googleAuthSDK() {
  //   (<any>window)['googleSDKLoaded'] = () => {
  //     (<any>window)['gapi'].load('auth2', () => {
  //       this.auth2 = (<any>window)['gapi'].auth2.init({
  //         client_id:
  //           '680742930685-mtvabcegkpva2o3h1v6u2ccg523thrrf.apps.googleusercontent.com',
  //         plugin_name: 'login',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email',
  //       });
  //       this.callLogin();
  //     });
  //   };

  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement('script');
  //     js.id = id;
  //     js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
  //     fjs?.parentNode?.insertBefore(js, fjs);
  //   })(document, 'script', 'google-jssdk');
  // }

  logoutnow() {
    this.authService.logoutnow();
  }
}
