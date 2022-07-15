import { Component, ElementRef, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public bioIsShown: boolean;
  public nameIsShown: boolean;
  public bioPencileIsShown: boolean = false;
  public namePencileIsShown: boolean = false;
  public user!: UserModel;
  constructor(public userModel: CurrentUserService) {
    this.nameIsShown = true;
    this.bioIsShown = true;
  }
  showPencile() {
    this.bioPencileIsShown = !this.bioPencileIsShown;
  }
  saveBio() {
    this.bioIsShown = true;
  }
  editBio() {
    this.bioIsShown = false;
    console.log('Edit');
  }

  editName() {
    this.nameIsShown = false;
  }

  showNamePencile() {
    this.namePencileIsShown = !this.namePencileIsShown;
  }

  saveName() {
    this.nameIsShown = true;
  }
  ngOnInit(): void {
    this.user = this.userModel.currentUser;
  }
}
