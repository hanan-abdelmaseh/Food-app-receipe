import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { ReviewModel } from 'src/app/Models/RecipeModel/ReviewModel/review-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { environment } from 'src/environments/environment';
import { CurrentUserService } from '../Profile Services/Current-User-Service/current-user.service';
import { RecipeService } from '../RecipeServices/recipe-services.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  public newReview?: ReviewModel;
  public allReviews: ReviewModel[] = [];
  public recipeReviewers?: UserModel[];
  constructor(
    private userService: CurrentUserService,
    private recipeService: RecipeService,
    private httpClient: HttpClient
  ) {}

  addReview(newReview: ReviewModel) {
    return this.httpClient.post(
      `${environment.APIURL}Reviews/AddReview`,
      newReview,
      {
        responseType: 'text',
      }
    );
  }

  deleteReview(id: number) {
    return this.httpClient.delete(`${environment.APIURL}Reviews/${id}`, {
      responseType: 'text',
    });
  }
}
