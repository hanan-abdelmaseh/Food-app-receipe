import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  title = 'Codingvila Login With Google';
  auth2: any;
  constructor() {
    console.log('start service');
  }

  callLogin(loginElement: ElementRef) {
    this.auth2.attachClickHandler(
      loginElement.nativeElement,
      {},
      (googleAuthUser: any) => {
        //Print profile details in the console logs

        let currentUser = googleAuthUser.getBasicProfile();

        console.log(currentUser);
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

  logoutnow() {
    this.auth2.signOut();
  }
}
