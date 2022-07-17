import { NutritionModel } from './NutritionModel/nutrition-model';
import { ReviewModel } from './ReviewModel/review-model';

export interface RecipeModel {
  reviews: ReviewModel[];
  recipeId: number;
  recipeName: string;
  auther: number;
  time: string;
  ingrediants: string[];
  nutritions: NutritionModel[];
  avgRating: number;
  recipeImg: string;
  numberAddingToCollections: number;
  seving: number;
  tags: string[];
  directions: string;
}
