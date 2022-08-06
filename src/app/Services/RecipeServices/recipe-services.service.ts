import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
import { RecipeDetailsViewModel } from 'src/app/viewModel/RcipeDetailsViewModel/recipe-details-view-model';
import { UserViewModel } from 'src/app/viewModel/UserViewModel/user-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipesList: RecipeModel[] = [];
  public currentRecipe?: RecipeModel;
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  constructor(private httpClient: HttpClient) {}

  getCurrentRecipeById(recipeId: number): Observable<RecipeDetailsViewModel> {
    return this.httpClient.get<RecipeDetailsViewModel>(
      `${environment.APIURL}Recipes/GetRecipeDetails/${recipeId}`
    );
  }
  getRecipeById(recipeId: number) {
    let recipe = this.recipesList?.find(
      (recipe) => recipeId == recipe.recipeId
    );
    return recipe;
  }
  addRecipe(recipe: RecipeModel) {}
  /* get all receipes*/
  getAllReceipes() {
    //fake api this will changes
    //will change in environment
    return this.httpClient.get(`${environment.APIURL}Recipes/HomeRecipes`);
    //return this.httpClient.get('https://fakestoreapi.com/products');
  }

  getFeedRecipes(pageNum: Number) {
    return this.httpClient.get<MainReceipe[]>(
      `${environment.APIURL}Recipes/FeedRecipes?pageNumber=${pageNum}`
    );
  }
  getAuther(autherID: number) {
    return this.httpClient.get<UserViewModel>(
      `${environment.APIURL}Users/GetUserById/${autherID}`
    );
  }
}
