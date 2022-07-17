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
    console.log('hello from constructor');

    let users = localStorage.getItem('users');
    if (users == null) {
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
          id: 4,
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
      ];
      localStorage.setItem('users', JSON.stringify(this.allUsers));
    } else {
      this.allUsers = JSON.parse(users);
    }

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
