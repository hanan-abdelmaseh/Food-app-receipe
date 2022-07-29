import { Location } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggenInSubject: BehaviorSubject<boolean>;
  auth2: any;
  constructor(private router: Router, private location: Location) {
    this.isLoggenInSubject =
      localStorage.getItem('token') == undefined
        ? new BehaviorSubject<boolean>(false)
        : new BehaviorSubject<boolean>(true);
  }

  callLogin(loginElement: ElementRef) {
    this.auth2.attachClickHandler(
      loginElement.nativeElement,
      {},
      (googleAuthUser: any) => {
        //Print profile details in the console logs

        let currentUser = googleAuthUser.getBasicProfile();
        localStorage.setItem(
          'token',
          googleAuthUser.getAuthResponse().id_token
        );
        this.location.back();
        this.isLoggenInSubject.next(true);

        console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + currentUser.getId());
        console.log('Name: ' + currentUser.getName());
        console.log('Image URL: ' + currentUser.getImageUrl());
        console.log('Email: ' + currentUser.getEmail());
      }

      // (error: any) => {
      //   alert(JSON.stringify(error, undefined, 2));
      // }
    );
  }

  googleAuthSDK(loginElement: ElementRef) {
    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id:
            '680742930685-mtvabcegkpva2o3h1v6u2ccg523thrrf.apps.googleusercontent.com',
          plugin_name: 'login',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email',
        });
        this.callLogin(loginElement);
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs?.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggenInSubject.next(false);
  }

  isLoggedIn() {
    return this.isLoggenInSubject;
  }
}
