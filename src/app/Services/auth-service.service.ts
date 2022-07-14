import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  public AllUsers: UserModel[] = [
    { UserId: 1, UserName: 'Hassan' },
    { UserId: 2, UserName: 'Hanan' },
    { UserId: 3, UserName: 'Kareem' },
  ];

  public isLoggedin: boolean = false;
  constructor() {}

  // public GetUserById(id: number): UserModel | void {
  //   this.AllUsers.forEach((element) => {
  //     if (element.UserId == id) {
  //       return element;
  //     } else return null;
  //   });
  // }

  // public AddUser(user: UserModel): void {
  //   this.AllUsers.push(user);
  // }

  // public GetAllUsers(user: UserModel): UserModel[] {
  //   return this.AllUsers;
  // }

  // public DeleteUser(id: number): void {
  //   let user = this.GetUserById(id);
  //   this.AllUsers.forEach((element) => {
  //     if (element.UserId == id) {
  //     }
  //   });
  // }
}
