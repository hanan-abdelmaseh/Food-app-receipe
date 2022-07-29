import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionModel } from 'src/app/Models/RecipeModel/NutritionModel/nutrition-model';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { ReviewModel } from 'src/app/Models/RecipeModel/ReviewModel/review-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
import { ReviewService } from 'src/app/Services/ReviewService/review-service.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  public currentRecipe: RecipeModel | null = null;
  public currentUser?: UserModel;
  public recipeAuther: UserModel | null = null;
  public ingrediantsCount: number = 0;
  public recipeCalories!: NutritionModel;
  public autherRecipes: RecipeModel[] = [];
  public allReviews?: ReviewModel[];
  public recipeReviwers?: UserModel[];
  public currentUserHasReview: boolean = false;
  public rate: number = 3;
  constructor(
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    public userService: CurrentUserService,
    public reviewService: ReviewService,
    private route: Router,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    //Get Recipe ID
    let recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');

    //Get Recipe
    if (recipeId != null) {
      this.recipeService.getCurrentRecipeById(+recipeId);

      if (this.recipeService.currentRecipe != null) {
        this.currentRecipe = this.recipeService.currentRecipe;

        //Get Recipe Auther
        this.recipeAuther = this.userService.getUserById(
          this.currentRecipe.auther
        )!;

        console.log('this.recipeAuther');
        console.log(this.recipeAuther);

        //Get Current User
        this.currentUser = this.userService.currentUser;

        //Get Recipe ingrediants count
        this.currentRecipe.ingrediants.forEach((_) => {
          this.ingrediantsCount++;
        });

        //Get Recipe Calories
        this.recipeCalories = this.currentRecipe.nutritions.find(
          (nut) => (nut.nutritionName = 'calories')
        )!;

        //Get All Reviews
        this.getAllReviews();

        //Get Auther Recipes
        this.getAutherRecipes();

        this.getRecipeReviewrs();

        //Check IF Current User Has Review
        this.isCurrentUserHasReview();

        // Navigate to NotFound in case of not found Recipe
      } else if (this.recipeService.currentRecipe == undefined) {
        this.route.navigate(['recipe/notfound']);
      }
    }
  }

  getAutherRecipes() {
    this.recipeAuther?.recipesWrittenByUser?.forEach((recipeID) => {
      let recipe = this.recipeService.getRecipeById(recipeID)!;

      this.autherRecipes?.push(recipe);
    });
  }

  getAllReviews() {
    this.reviewService.getAllReviews();
    this.allReviews = this.reviewService.allReviews;
  }

  getRecipeReviewrs() {
    this.recipeReviwers = [];
    this.currentRecipe?.reviews!.forEach((review) => {
      let user = this.userService.getUserById(review.reviewWriterId)!;
      this.recipeReviwers?.push(user);
    });
  }

  isCurrentUserHasReview() {
    // this.reviewService.allReviews.forEach((review) => {
    //   if (review.reviewWriterId == this.currentUser?.id) {
    //     this.currentUserHasReview = true;
    //   }
    // });
  }

  addNewReview(
    reviewWriterId: number,
    reviewDate: string,
    reviewContent: string,
    rating: number
  ) {
    // let newReview = {
    //   reviewWriterId: reviewWriterId,
    //   reviewDate: reviewDate,
    //   reviewContent: reviewContent,
    //   rating: rating,
    // };
    // this.reviewService.addReview(newReview);
    // this.allReviews = this.reviewService.allReviews;
    // this.recipeReviwers = this.reviewService.recipeReviewers;
    // this.currentUserHasReview = true;
  }

  deleteReview(index: number) {
    // this.reviewService.deleteReview(index);
    // this.allReviews = this.reviewService.allReviews;
    // this.recipeReviwers = this.reviewService.recipeReviewers;
    // this.currentUserHasReview = false;
  }
}
