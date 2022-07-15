import { Injectable } from '@angular/core';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  public collectionsList: CollectionModel[] | null = null;
  constructor() {
    this.collectionsList = [
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
        collectioRecipes: ['Chicken', 'Meat', 'Food', 'Beef', 'Fish'],
        noOfRecipes: 5,
      },
      {
        collectionDescription: 'This is Third Collection',
        collectionImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglieQRv212_C1bJEwG18YcOJeJL75qlyWfQ&usqp=CAU',
        collectionName: 'Third Collection',
        collectioRecipes: ['Fries', 'Meat', 'Shaworma', 'Beef', 'Botatos'],
        noOfRecipes: 5,
      },
      {
        collectionDescription: 'This is Forth Collection',
        collectionImg:
          'https://previews.123rf.com/images/nebulapix/nebulapix1310/nebulapix131000107/23173412-collection-of-asian-food-including-sweet-and-sour.jpg',
        collectionName: 'Forth Collection',
        collectioRecipes: ['Chicken', 'Rice', 'Food', 'Tomato', 'Fish'],
        noOfRecipes: 5,
      },
    ];
  }
}
