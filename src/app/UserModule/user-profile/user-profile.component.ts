import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { UserViewModel } from 'src/app/viewModel/UserViewModel/user-view-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public currentUser: UserViewModel = {
    userId: 0,
    userName: '',
  };
  constructor(
    public currentUserService: CurrentUserService,
    private router: Router
  ) {
    this.getCurrentUser();
  }

  ngOnInit(): void {}

  getCurrentUser() {
    this.currentUserService.getCurrentUserId().subscribe({
      next: (id) => {
        console.log('userID' + id);
        this.currentUserService.getUserById(+id).subscribe({
          next: (currentUser) => {
            console.log('usrr');
            console.log(currentUser);
            this.currentUser = currentUser;
          },
        });
      },
    });
  }

  goToSocialAcc(social: string) {
    if (social == 'FaceBook') {
      this.currentUser?.facebook == ''
        ? Swal.fire(`You Dont Have ${social} Account`)
        : window.open(this.currentUser?.facebook, '_blank');
    } else if (social == 'Twitter') {
      this.currentUser?.twitter == ''
        ? Swal.fire(`You Dont Have ${social} Account`)
        : window.open(this.currentUser?.twitter, '_blank');
    } else if (social == 'Website') {
      this.currentUser?.site == ''
        ? Swal.fire(`You Dont Have ${social}`)
        : window.open(this.currentUser?.site, '_blank');
    }
  }
}
