import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('token') == undefined) {
      Swal.fire({
        width: '80%',
        scrollbarPadding: false,
        title: 'Sorry, You Should Login First',
        text: 'Go to Sign in Page?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, keep me on site.',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/login']);
        } else {
          if (this.router.url == '/about') {
            this.router.navigate(['/about']);
          } else this.router.navigate(['/home']);
        }
      });
      return false;
    } else {
      return true;
    }
  }
}
