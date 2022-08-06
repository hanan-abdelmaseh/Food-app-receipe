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
import { RecipeDetailsViewModel } from 'src/app/viewModel/RcipeDetailsViewModel/recipe-details-view-model';
import { ReviewViewModel } from 'src/app/viewModel/ReviewViewModel/review-view-model';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { CollectionViewModel } from 'src/app/viewModel/CollectionViewModel/collection-view-model';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { UserViewModel } from 'src/app/viewModel/UserViewModel/user-view-model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  public currentRecipe: RecipeDetailsViewModel | null = null;
  public currentUser?: UserViewModel;
  public autherRecipes: RecipeDetailsViewModel[] | undefined = undefined;
  public loading: boolean = false;
  public userColletions: CollectionViewModel[] = [];
  public collectionShown: boolean = false;
  public recipeCollections: boolean[] = [];
  public reviewRating: number = 1;
  public ingrediantsCount: number = 0;
  public addReviewForm!: FormGroup;
  public currentUserHasReview: boolean = false;
  //  public reviewContent:string = '';
  constructor(
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    public userService: CurrentUserService,
    public reviewService: ReviewService,
    private route: Router,
    private primengConfig: PrimeNGConfig,
    private collectionService: CollectionsService,
    private fb: FormBuilder
  ) {
    this.currentUser = {
      userId: 0,
      userName: '',
    };
    this.addReviewForm = this.fb.group({
      reviewRating: [this.reviewRating],
      reviewContent: ['', [Validators.required]],
      writerId: [this.currentUser.userId],
      writerName: [this.currentUser.userName],
      recipeId: [this.currentRecipe?.recipeID],
      reviewId: [null],
      reviewDate: [new Date()],
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.userService.getCurrentUserId().subscribe({
      next: (id) => {
        this.userService.getUserById(+id).subscribe({
          next: (user) => {
            this.currentUser = user;
            this.getCurrentRecipe();
          },
        });
      },
    });

    //Get Recipe ID
  }

  navigateToAuther() {
    // this.route.navigate(['user', this.currentRecipe?.authorId]);
  }

  addNewReview() {
    if (this.addReviewForm.valid) {
      this.reviewService.addReview(this.addReviewForm.value).subscribe({
        next: () => {
          this.getCurrentRecipe();
          this.currentUserHasReview = true;
        },
      });
      console.log(this.addReviewForm.value);
    }
  }
  removeReview(reviewID: number) {
    this.reviewService.deleteReview(reviewID).subscribe({
      next: () => {
        this.currentUserHasReview = false;
        this.getCurrentRecipe();
      },
    });
  }
  getAuther() {
    this.recipeService.getAuther(this.currentRecipe!.authorId).subscribe({
      next: (auther) => {
        console.log(auther);
        this.autherRecipes = auther.recipes;
      },
    });
  }
  getCurrentRecipe() {
    let recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');

    //Get Recipe
    if (recipeId != undefined) {
      this.recipeService.getCurrentRecipeById(+recipeId).subscribe(
        (recipe) => {
          if (recipe == null) {
            this.route.navigate(['recipe/notfound']);
          } else {
            this.currentRecipe = recipe;
            this.currentRecipe?.recipeIngredients.forEach((element) => {
              this.ingrediantsCount = this.ingrediantsCount + 1;
              this.loading = false;
              this.addReviewForm = this.fb.group({
                reviewRating: [this.reviewRating],
                reviewContent: ['', [Validators.required]],
                writerId: [this.currentUser!.userId],
                writerName: [this.currentUser!.userName],
                recipeId: [this.currentRecipe?.recipeID],
                reviewId: [null],
                reviewDate: [new Date()],
              });
              this.currentUserHasReviewCheck();
            });
            // this.getAuther();
            this.getUserCollections();
            console.log(this.currentRecipe?.reviews);
          }
        },
        () => {
          this.route.navigate(['recipe/notfound']);
        }
      );
    } else if (this.recipeService.currentRecipe == undefined) {
      this.route.navigate(['recipe/notfound']);
    }
  }
  getUserCollections() {
    this.collectionService.getAllCollections().subscribe({
      next: (collections) => {
        this.userColletions = collections;
        this.initializeSelectedCollections();
      },
    });
  }

  initializeSelectedCollections() {
    for (let i = 0; i < this.userColletions.length; i++) {
      this.collectionService
        .getCollectionRecipes(this.userColletions[i].collectionId)
        .subscribe({
          next: (recipes) => {
            for (let y = 0; y < recipes.length; y++) {
              if (recipes[y].recipeID == this.currentRecipe?.recipeID) {
                this.recipeCollections[i] = true;
                break;
              } else {
                this.recipeCollections[i] = false;
              }
            }
          },
        });
    }
  }

  addRecipeToCollection(recipeId: number, collectionId: number, event: any) {
    if (!event.target.checked) {
      console.log(event.target.checked);
      this.collectionService
        .removeRecipeFromCollection(recipeId, collectionId)
        .subscribe({
          next: () => {
            this.initializeSelectedCollections();
          },
        });
    } else {
      console.log(event.target.checked);
      this.collectionService
        .addRecipeToCollection(recipeId, collectionId)
        .subscribe({
          next: () => {
            this.initializeSelectedCollections();
          },
        });
    }
  }
  getCurrentUser() {
    this.userService.getCurrentUserId();
  }
  changeRating(event: any) {
    this.reviewRating = event;
    this.addReviewForm.patchValue({
      reviewRating: event,
    });
  }
  get getReviewRating() {
    return this.addReviewForm.value['reviewRating'];
  }
  get reviewContent() {
    return this.addReviewForm.get('reviewContent');
  }

  currentUserHasReviewCheck() {
    this.currentRecipe?.reviews.forEach((review) => {
      if (review.writerId == this.currentUser?.userId) {
        this.currentUserHasReview = true;
      }
    });
  }
}
