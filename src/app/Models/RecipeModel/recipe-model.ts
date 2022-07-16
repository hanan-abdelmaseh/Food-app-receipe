import { NutritionModel } from './NutritionModel/nutrition-model';
import { ReviewModel } from './ReviewModel/review-model';

export class RecipeModel {
  public reviews?: ReviewModel[];
  constructor(
    public recipeId: number,
    public recipeName: string,
    public auther: number,
    public time: string,
    public ingrediants: string[],
    public nutritions: NutritionModel[],
    public avgRating: number,
    public recipeImg: string,
    public numberAddingToCollections: number,
    public seving: number,
    public tags: string[],
    public directions: string
  ) {}
}
