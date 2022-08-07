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
      password: [''],
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
              this.userEditForm.setControl(
                'password',
                new FormControl('', [
                  Validators.pattern(
                    `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,50}$`
                  ),
                  Validators.required,
                ])
              );
            } else {
              this.loginWithEmail = true;
              this.userEditForm.addControl('password', new FormControl(''));
            }
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
    console.log(this.userEditForm.value);
    // for (const email in this.userEditForm.controls) {
    //   this.userEditForm.setValue = this.currentUser?.email;
    // }
    // this.userEditForm.get('email')?.setValue(this.currentUser?.email);
    this.userEditForm.value['email'] = this.currentUser?.email;
    if (this.loginWithEmail) {
      this.userEditForm.value['password'] = '';
    }
    console.log(this.userEditForm.controls);
    console.log(this.userEditForm.value);
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
    console.log(this.userEditForm.value);
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.userEditForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
