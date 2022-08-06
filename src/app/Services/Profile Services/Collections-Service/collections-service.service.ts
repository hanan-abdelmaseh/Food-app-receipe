import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionViewModel } from 'src/app/viewModel/CollectionViewModel/collection-view-model';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
import { RecipeCollectionViewModel } from 'src/app/viewModel/RecipeCollectionViewModel/recipe-collection-view-model';
import { environment } from 'src/environments/environment';
import { CurrentUserService } from '../Current-User-Service/current-user.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  constructor(
    private userService: CurrentUserService,
    private httpClient: HttpClient
  ) {}

  getAllCollections(): Observable<CollectionViewModel[]> {
    return this.httpClient.get<CollectionViewModel[]>(
      `${environment.APIURL}Collections/SavedRecipes`
    );
  }
  deleteCollection(collectionId: number) {
    return this.httpClient.delete(
      `${environment.APIURL}Collections/DeleteCollection/${collectionId}`
    );
  }

  addCollection(collectionName: string) {
    let newCollection = {
      collectionId: 0,
      collectionImage:
        'https://x.yummlystatic.com/web/default-collection-images/default.png',
      collectionName: collectionName,
      collectionDescription: '',
      numberOfRecipes: 0,
      collectionRecipes: null,
    };
    return this.httpClient.post(
      `${environment.APIURL}Collections/AddCollection`,
      newCollection,
      {
        responseType: 'text',
      }
    );
  }

  updateCollection(
    collectionId: number,
    collectionName: string,
    collectionImage: string,
    collectionRecipes: RecipeCollectionViewModel[],
    collecionDesc?: string
  ) {
    let newCollection = {
      collectionId: 0,
      collectionImage: collectionImage,
      collectionName: collectionName,
      collectionDescription: collecionDesc == undefined ? '' : collecionDesc,
      numberOfRecipes: 0,
      collectionRecipes: collectionRecipes,
    };

    return this.httpClient.post(
      `${environment.APIURL}Collections/editCollection/${collectionId}`,
      newCollection
    );
  }

  removeRecipeFromCollection(recipeId: number, collectionId: number) {
    return this.httpClient.delete(
      `${environment.APIURL}Collections/DeleteRecipeFromCollection`,
      {
        body: {
          collectionID: collectionId,
          recipeID: recipeId,
        },
      }
    );
  }

  addRecipeToCollection(recipeId: number, collectionId: number) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post(
      `${environment.APIURL}Collections/AddRecipeToCollection`,
      {
        collectionID: collectionId,
        recipeID: recipeId,
      },
      {
        responseType: 'text',
      }
    );
  }

  getCollectionRecipes(collectionId: number) {
    return this.httpClient.get<MainReceipe[]>(
      `${environment.APIURL}Collections/GetCollectionRecipes/${collectionId}`
    );
  }
}
