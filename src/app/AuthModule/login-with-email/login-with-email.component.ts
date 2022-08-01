import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.css'],
})
export class LoginWithEmailComponent implements OnInit {
  public registerSerctionShown: boolean = false;
  public registerUserName = '';
  public registerPassword = '';
  public userName: string = '';
  public password: string = '';
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  back() {
    this.router.navigateByUrl('/login');
  }

  loginWithUserName() {
    this.authService.loginWithUserName(this.userName, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response);
        this.authService.isLoggenInSubject.next(true);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error.status);
        this.registerSerctionShown = true;
      },
    });
  }
  goToRegistrantion() {
    this.router.navigate(['/register']);
  }

  registerWithUserName() {
    this.authService
      .registerWithUserName(this.registerUserName, this.registerPassword)
      .subscribe({
        next: (response) => {
          Swal.fire('registered successfully');
          console.log('Registered');
          this.router.navigate(['/home']);
        },
        error: () => {
          console.log('Unexpected Error Occurred');
        },
      });
  }

  hideRegiter() {
    this.registerSerctionShown = false;
    this.registerUserName = '';
    this.registerPassword = '';
  }
}
