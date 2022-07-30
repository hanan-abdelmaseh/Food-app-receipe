import { ReviewViewModel } from '../ReviewViewModel/review-view-model';

export interface RecipeDetailsViewModel {
  recipeID: number;
  recipeName: string;
  authorId: number;
  authorName: string;
  time: number;
  recipeImage: string;
  recipeCategory: string;
  recipeTags: string[];
  recipeIngredients: string[];
  recipeRating: number;
  reviewsCount: number;
  calories: number;
  fats: number;
  saturatedFats: number;
  cholesterol: number;
  sodium: number;
  carbohydrates: number;
  fibers: number;
  sugar: number;
  protein: number;
  serving: number;
  recipeInstructions: string[];
  reviews: ReviewViewModel[];
}
