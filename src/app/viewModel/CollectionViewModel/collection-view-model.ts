import { RecipeCollectionViewModel } from '../RecipeCollectionViewModel/recipe-collection-view-model';

export interface CollectionViewModel {
  collectionId: number;
  collectionImage: string;
  collectionName: string;
  collectionDescription?: string;
  numberOfRecipes: number;
  collectionRecipes: RecipeCollectionViewModel[];
}
