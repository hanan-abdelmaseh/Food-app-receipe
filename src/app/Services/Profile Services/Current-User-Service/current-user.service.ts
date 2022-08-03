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
  public allUsers: UserModel[];
  public currentUser: UserModel;
  public currentUserId!: number;
  constructor(private httpLCient: HttpClient) {
    this.allUsers = [
      {
        id: 1,
        recipesWrittenByUser: [1, 2, 3, 1, 2, 3],
        userName: 'Hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
        userCollections: [
          {
            collectionDescription: 'This is First Collection',
            collectionImg:
              'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            collectionName: 'First Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Second Collection',
            collectionImg:
              'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            collectionName: 'Second Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Third Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Third Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Forth Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Forth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Fifth Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Fifth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Six Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Six Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
        ],
      },
      {
        id: 2,
        recipesWrittenByUser: [1, 2, 3, 1, 2, 3],
        userName: 'Ahmed Saad',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
        userCollections: [
          {
            collectionDescription: 'This is First Collection',
            collectionImg:
              'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            collectionName: 'First Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Second Collection',
            collectionImg:
              'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            collectionName: 'Second Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Third Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Third Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Forth Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Forth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Fifth Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Fifth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Six Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Six Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
        ],
        userImg:
          'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
      },
      {
        id: 3,
        recipesWrittenByUser: [1, 2, 3, 1, 2, 3],
        userName: 'Mohamed Ahmed',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
        userCollections: [
          {
            collectionDescription: 'This is First Collection',
            collectionImg:
              'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            collectionName: 'First Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Second Collection',
            collectionImg:
              'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            collectionName: 'Second Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Third Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Third Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Forth Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Forth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Fifth Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Fifth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Six Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Six Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
        ],
        userImg:
          'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
      },
      {
        id: 4,
        recipesWrittenByUser: [1, 2, 3, 1, 2, 3],
        userName: 'hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
        userCollections: [
          {
            collectionDescription: 'This is First Collection',
            collectionImg:
              'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            collectionName: 'First Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Second Collection',
            collectionImg:
              'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            collectionName: 'Second Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Third Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Third Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Forth Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Forth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Fifth Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Fifth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Six Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Six Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
        ],
        userImg:
          'https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg',
      },
      {
        id: 5,
        recipesWrittenByUser: [1, 2, 3, 1, 2, 3],
        userName: 'hassan Farag',
        city: '',
        bio: 'This is Bio',
        country: 'Egypt',
        state: 'Alex',
        userFacebook: '',
        userSite: 'Google',
        userTwitter: 'Twitter',
        userCollections: [
          {
            collectionDescription: 'This is First Collection',
            collectionImg:
              'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            collectionName: 'First Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Second Collection',
            collectionImg:
              'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            collectionName: 'Second Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Third Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Third Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Forth Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Forth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Fifth Collection',
            collectionImg:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
            collectionName: 'Fifth Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
          {
            collectionDescription: 'This is Six Collection',
            collectionImg:
              'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
            collectionName: 'Six Collection',
            collectioRecipes: [],
            noOfRecipes: 0,
          },
        ],
        userImg: 'https://tinypng.com/images/social/website.jpg',
      },
    ];

    this.currentUser = this.allUsers[3];
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
}
