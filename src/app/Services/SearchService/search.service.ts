import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchedList: RecipeModel[] = [];
  constructor() {}

  search() {}

  rsestFilters() {}
}
