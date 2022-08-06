import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { UserViewModel } from 'src/app/viewModel/UserViewModel/user-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  // public allUsers: UserModel[];
  public currentUser?: UserViewModel;
  // public currentUserId!: number;
  constructor(private httpLCient: HttpClient) {
    this.getCurrentUserId().subscribe({
      next: (id) => {
        this.getUserById(+id).subscribe({
          next: (user) => {
            this.currentUser = user;
          },
        });
      },
    });
  }

  getUserById(id: number): Observable<UserViewModel> {
    return this.httpLCient.get<UserViewModel>(
      `${environment.APIURL}Users/GetUserById/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  getCurrentUserId() {
    return this.httpLCient.get(`${environment.APIURL}Users/GetUserID`, {
      responseType: 'text',
    });
  }

  editUser(id: number, user: UserViewModel) {
    return this.httpLCient.put(
      `${environment.APIURL}Users/editUserSettings/${id}`,
      user,
      {
        responseType: 'text',
      }
    );
  }
}
