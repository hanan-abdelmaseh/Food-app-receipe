import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/Models/User Model/user-model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public currentUser: UserModel;
  constructor() {
    this.currentUser = {
      id: 1,
      userName: 'hassan Farag',
      city: '',
      bio: 'This is Bio',
      country: 'Egypt',
      state: 'Alex',
      userFacebook: '',
      userSite: 'Google',
      userTwitter: 'Twitter',
    };
  }
}
