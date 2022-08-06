import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { FiltersModel } from 'src/app/Models/SelectedFiltersModel/selected-filters-Model';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchedList: RecipeModel[] = [];
  constructor(private httpClient: HttpClient) {}

  search(recipeName: string, pageNumber: number) {
    return this.httpClient.post<MainReceipe[]>(
      `${environment.APIURL}Recipes/SearchRecipes?recipeName=${recipeName}&pageNumber=${pageNumber}`,
      ''
    );
  }
  filter(pageNumber: number, filtersModel: FiltersModel) {
    return this.httpClient.post<MainReceipe[]>(
      `${environment.APIURL}Recipes/FilterRecipes?pageNumber=${pageNumber}`,
      filtersModel
    );
  }

  rsestFilters() {}
}
