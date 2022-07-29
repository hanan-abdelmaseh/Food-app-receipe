import { Component, ElementRef, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  inEditMode: boolean;
  public user!: UserModel;
  constructor(public userModel: CurrentUserService) {
    this.inEditMode = false;
  }

  ngOnInit(): void {
    this.user = this.userModel.currentUser;
  }
}
