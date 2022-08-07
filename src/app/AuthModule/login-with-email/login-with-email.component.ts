import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.css'],
})
export class LoginWithEmailComponent implements OnInit {
  public registerSectionShown: boolean = false;
  public userLoginForm: FormGroup;
  public userRegisterForm: FormGroup;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    fb: FormBuilder
  ) {
    this.userLoginForm = fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.userRegisterForm = fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(`^[a-zA-z]{1}[/s a-zA-z0-9.-]{3,49}$`),
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,50}$`
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}
  back() {
    this.router.navigateByUrl('/login');
  }

  get userName() {
    return this.userLoginForm.get('userName');
  }

  get password() {
    return this.userLoginForm.get('password');
  }
  get userNameReg() {
    return this.userRegisterForm.get('userName');
  }

  get passwordReg() {
    return this.userRegisterForm.get('password');
  }

  loginWithUserName() {
    if (this.userLoginForm.valid) {
      this.authService
        .loginWithUserName(
          this.userLoginForm.value['userName'],
          this.userLoginForm.value['password']
        )
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response);
            this.authService.isLoggenInSubject.next(true);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.log(error);
            this.registerSectionShown = true;
          },
        });
    }
  }
  goToRegistrantion() {
    this.router.navigate(['/register']);
  }

  registerWithUserName() {
    if (this.userRegisterForm.valid) {
      this.authService.CreateNewUserWithUserName(
        this.userRegisterForm.value['userName'],
        this.userRegisterForm.value['password']
      );
    }
  }

  hideRegiter() {
    this.registerSectionShown = false;
    this.userRegisterForm.patchValue({
      userName: '',
      password: '',
    });
  }
}
