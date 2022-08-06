import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { UserViewModel } from 'src/app/viewModel/UserViewModel/user-view-model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {
  public currentUser?: UserViewModel;
  public userEditForm: FormGroup;
  public show: boolean = false;
  loginWithEmail!: boolean;
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.userEditForm = fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(`^[a-zA-z]{1}[/s a-zA-z0-9.-]{3,49}$`),
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      bio: [''],
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      facebook: [
        '',
        // Validators.pattern(
        //   '(?:(?:http|https)://)?(?:www.)?facebook.com/(?:(?:w)*#!/)?(?:pages/)?(?:[?w-]*/)?(?:profile.php?id=(?=d.*))?([w-]*)?'
        // ),
      ],
      twitter: new FormControl(''),
      site: new FormControl(''),
      userImage: new FormControl(''),
      email: [
        { value: this.currentUser?.email, disabled: true },
        Validators.required,
      ],
      password: [
        '',
        [
          Validators.pattern(
            `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,50}$`
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  showPassword() {
    this.show = !this.show;
  }
  getCurrentUser() {
    this.currentUserService.getCurrentUserId().subscribe({
      next: (id) => {
        this.currentUserService.getUserById(+id).subscribe({
          next: (user) => {
            this.currentUser = user;
            if (this.currentUser?.email == '') {
              this.loginWithEmail = false;
            } else this.loginWithEmail = true;
            this.userEditForm.patchValue(this.currentUser);
          },
        });
      },
    });
  }

  get userName() {
    return this.userEditForm.get('userName');
  }

  get password() {
    return this.userEditForm.get('password');
  }

  // get facebook() {
  //   return this.userEditForm.get('facebook');
  // }

  editUser() {
    for (const email in this.userEditForm.controls) {
      this.userEditForm.value[email] = this.userEditForm.controls[email].value;
    }
    if (this.userEditForm.valid) {
      this.currentUserService
        .editUser(this.currentUser?.userId!, this.userEditForm.value)
        .subscribe({
          next: () => {
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate(['/profile']);
              });
          },
        });
    }
    // console.log(this.userEditForm.value);
  }
}
