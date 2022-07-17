import { Injectable } from '@angular/core';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CurrentUserService } from '../Current-User-Service/current-user.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  public userCollectionsList: CollectionModel[];
  public getCollection: CollectionModel | null = null;
  constructor(private userService: CurrentUserService) {
    this.userCollectionsList =
      this.userService.currentUser.userCollections == undefined
        ? []
        : this.userService.currentUser.userCollections;
  }

  getAllCollections() {
    this.userCollectionsList =
      this.userService.currentUser.userCollections == undefined
        ? []
        : this.userService.currentUser.userCollections;
  }

  getCollectionByName(collectionName: string) {
    let collecion = this.userCollectionsList.find(
      (collection) => collection.collectionName == collectionName
    );
    if (collecion != null) {
      this.getCollection = collecion;
    }
  }

  deleteCollection(collectionName: string) {
    this.userCollectionsList.forEach((collection, index) => {
      if (collection.collectionName == collectionName) {
        this.userService.currentUser.userCollections?.splice(index, 1);
        this.getAllCollections();
        localStorage.clear();
        localStorage.setItem(
          'users',
          JSON.stringify(this.userService.allUsers)
        );
      }
    });
  }

  addCollection(collectionName: string, collecionDesc?: string) {
    this.userService.currentUser.userCollections?.push({
      collectionName: collectionName,
      collectionDescription: collecionDesc == undefined ? '' : collecionDesc,
      collectionImg: '',
      collectioRecipes: [],
      noOfRecipes: 0,
    });
    this.getAllCollections();
    localStorage.setItem('users', JSON.stringify(this.userService.allUsers));
  }

  updateCollection(collectionName: string, collecionDesc?: string) {
    let index = this.userService.currentUser.userCollections!.findIndex(
      (collection) => collection.collectionName == collectionName
    );
    if (index != undefined) {
      this.userService.currentUser.userCollections![index].collectionName =
        collectionName;
      this.userService.currentUser.userCollections![
        index
      ].collectionDescription = collecionDesc == undefined ? '' : collecionDesc;
    }
    this.getAllCollections();
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(this.userService.allUsers));
  }

  addToCollectionRecipes(collectionName: string, recipeId: number) {
    let index = this.userService.currentUser.userCollections?.findIndex(
      (collection) => collection.collectionName == collectionName
    );

    if (index != undefined) {
      this.userService.currentUser.userCollections![
        index
      ].collectioRecipes.push(recipeId);

      this.userService.currentUser.userCollections![index].noOfRecipes++;
    }
    this.getAllCollections();
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(this.userService.allUsers));
  }

  removeFromCollectionRecipes(collectionName: string, recipeId: number) {
    let index = this.userService.currentUser.userCollections?.findIndex(
      (collection) => collection.collectionName == collectionName
    );
    if (index != undefined) {
      let recipeIndex = this.userService.currentUser.userCollections![
        index
      ].collectioRecipes.findIndex((index) => index == recipeId);
      this.userService.currentUser.userCollections![index].noOfRecipes--;
      this.userService.currentUser.userCollections![
        index
      ].collectioRecipes.splice(recipeIndex, 1);
    }
    this.getAllCollections();
  }
}
