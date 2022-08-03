import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, map, mergeMap } from 'rxjs';
import { EditUserViewModel } from 'src/app/viewModel/EditUserViewModel/edit-user-view-model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggenInSubject: BehaviorSubject<boolean>;
  auth2: any;
  constructor(private router: Router, private httpClient: HttpClient) {
    this.isLoggenInSubject =
      localStorage.getItem('token') == undefined
        ? new BehaviorSubject<boolean>(false)
        : new BehaviorSubject<boolean>(true);
    this.googleAuthSDK();
  }

  callLogin(loginElement: ElementRef) {
    return new Promise((resolve, reject) => {
      this.auth2.attachClickHandler(
        loginElement.nativeElement,
        {},
        (googleAuthUser: any) => {
          //Print profile details in the console logs
          let currentUser = googleAuthUser.getBasicProfile();
          console.log(currentUser);
          this.loginWithGoogle(currentUser).subscribe({
            next: (response) => {
              console.log(response);
              console.log('Logged In');
              localStorage.setItem('token', response);
              this.isLoggenInSubject.next(true);
              resolve(true);
            },
            error: (error) => {
              console.log(error);
              if (error.status === 404) {
                this.CreateNewUser(currentUser);
                resolve(true);
              } else {
                console.log('unkown error occured, try again');
              }
            },
          });
        },
        (error: any) => {
          this.router.canceledNavigationResolution.replace;
          alert(JSON.stringify(error, undefined, 2));
          reject(false);
        }
      );
    });
  }

  googleAuthSDK() {
    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id:
            '680742930685-mtvabcegkpva2o3h1v6u2ccg523thrrf.apps.googleusercontent.com',
          plugin_name: 'login',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email',
        });
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
    this.router.navigate(['/home']);
  }

  loginWithGoogle(currentUser: any) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let httpParams = new HttpParams().set('email', currentUser.getEmail());
    return this.httpClient
      .post(`${environment.APIURL}Users/LoginByGoogle`, null, {
        params: httpParams,
        headers: httpHeaders,
        responseType: 'text',
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  // Create and Initilaize and Login New User
  CreateNewUser(currentUser: any) {
    return this.registerWithEmail(currentUser).subscribe({
      next: (userID) => {
        console.log('User Created');
        this.setNewUserData(
          +userID,
          currentUser.getName(),
          undefined,
          currentUser
        ).subscribe({
          next: () => {
            console.log('User Intilaized');
            this.loginWithGoogle(currentUser).subscribe({
              next: (response) => {
                this.initializeDefaultCollections().subscribe({
                  next: () => {
                    console.log('initializeDefaultCollections');
                    console.log('Logged In');
                    localStorage.setItem('token', response);
                    this.isLoggenInSubject.next(true);
                  },
                });
              },
            });
          },
        });
      },
      error: () => {
        console.log('unkown error occured, try again');
      },
    });
  }

  // Create User From Email
  registerWithEmail(currentUser: any) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post(
      `${
        environment.APIURL
      }Users/AddUser?userName=${currentUser.getName()}&email=${currentUser.getEmail()}`,
      '',
      {
        headers: httpHeaders,
        responseType: 'text',
      }
    );
  }

  // Create User From User Name and Password
  registerWithUserName(userName: string, password: string) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post(
      `${environment.APIURL}Users/AddUser?userName=${userName}&password=${password}`,
      '',
      {
        headers: httpHeaders,
        responseType: 'text',
      }
    );
  }
  // Intilaize User
  setNewUserData(
    userID: number,
    userName: string,
    password?: string,
    currentUser?: any
  ) {
    console.log(currentUser);
    let editUser: EditUserViewModel = {
      email: currentUser == undefined ? '' : currentUser.getEmail(),
      userName: currentUser == undefined ? userName : currentUser.getName(),
      password: currentUser == undefined ? password : '',
      bio: '',
      city: '',
      country: '',
      facebook: '',
      site: '',
      state: '',
      twitter: '',
      userImage: '',
    };

    return this.httpClient.put(
      `${environment.APIURL}Users/editUserSettings/${userID}`,
      editUser
    );
  }
  initializeDefaultCollections() {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');

    let collectionList = [
      {
        collectionId: 0,
        collectionImage:
          'https://x.yummlystatic.com/web/default-collection-images/sides.png',
        collectionName: 'Sides',
        collectionDescription: '',
        numberOfRecipes: 0,
        collectionRecipes: null,
      },
      {
        collectionId: 0,
        collectionImage:
          'https://x.yummlystatic.com/web/default-collection-images/dinners.png',
        collectionName: 'Dinners',
        collectionDescription: '',
        numberOfRecipes: 0,
        collectionRecipes: null,
      },
      {
        collectionId: 0,
        collectionImage:
          'https://x.yummlystatic.com/web/default-collection-images/desserts.png',
        collectionName: 'Desserts',
        collectionDescription: '',
        numberOfRecipes: 0,
        collectionRecipes: null,
      },
      {
        collectionId: 0,
        collectionImage:
          'https://x.yummlystatic.com/web/default-collection-images/drinks.png',
        collectionName: 'Drinks',
        collectionDescription: '',
        numberOfRecipes: 0,
        collectionRecipes: null,
      },
    ];
    return from(collectionList).pipe(
      mergeMap((collection) =>
        this.httpClient.post(
          `${environment.APIURL}Collections/AddCollection`,
          collection,
          {
            headers: httpHeaders,
            responseType: 'text',
          }
        )
      )
    );
  }
  // Login with UserName Password
  loginWithUserName(userName: string, password: string) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post(
      `${environment.APIURL}Users/Login`,
      {
        userName: userName,
        password: password,
      },
      {
        headers: httpHeaders,
        responseType: 'text',
      }
    );
  }

  CreateNewUserWithUserName(userName: string, password: string) {
    return this.registerWithUserName(userName, password).subscribe({
      next: (userID) => {
        console.log('User Created');
        this.setNewUserData(+userID, userName, password).subscribe({
          next: () => {
            console.log('User Intilaized');
            this.loginWithUserName(userName, password).subscribe({
              next: (response) => {
                this.initializeDefaultCollections().subscribe({
                  next: () => {
                    console.log('initializeDefaultCollections');
                    Swal.fire('registered successfully')
                      .then(() => {
                        localStorage.setItem('token', response);
                        this.isLoggenInSubject.next(true);
                      })
                      .then(() => {
                        this.router.navigate(['/home']);
                      });
                  },
                });
              },
            });
          },
        });
      },
      error: () => {
        console.log('unkown error occured, try again');
      },
    });
  }
  isLoggedIn() {
    return this.isLoggenInSubject;
  }
}
