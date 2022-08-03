import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { ReviewModel } from 'src/app/Models/RecipeModel/ReviewModel/review-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
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
    private recipeService: RecipeService
  ) {}

  getAllReviews() {
    this.allReviews = this.recipeService.currentRecipe?.reviews!;
  }

  addReview(newReview: ReviewModel) {
    // this.recipeService.currentRecipe?.reviews.push(newReview);
    // this.getAllReviews();
    // this.getReviewsWriters();
  }

  getReviewsWriters() {
    this.recipeReviewers = [];
    this.recipeService.currentRecipe?.reviews.forEach((review) => {
      let user = this.userService.getUserById(review.reviewWriterId)!;
      // this.recipeReviewers?.push(user);
    });
  }

  deleteReview(index: number) {
    this.allReviews.splice(index, 1);
    this.recipeReviewers?.splice(index, 1);
    console.log(index);
    console.log(this.allReviews);
    console.log(this.recipeReviewers);
  }
}
