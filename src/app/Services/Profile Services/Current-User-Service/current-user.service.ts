import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/Models/User Model/user-model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public allUsers: UserModel[];
  public currentUser: UserModel;
  public getUser: UserModel | null = null;
  constructor() {
    this.allUsers = [
      {
        id: 1,
        userName: 'Hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
      },
      {
        id: 2,
        userName: 'Ahmed Saad',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
      },
      {
        id: 3,
        userName: 'Mohamed Ahmed',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
      },
      {
        id: 4,
        userName: 'hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
      },
      {
        id: 5,
        userName: 'hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
      },
    ];
    this.currentUser = this.allUsers[0];
  }

  getUserById(id: number) {
    let x;
    this.allUsers.forEach((user) => {
      x = user;
      if (user.id == id) {
        console.log(x);
        this.getUser = user;
      }
    });
  }
}
