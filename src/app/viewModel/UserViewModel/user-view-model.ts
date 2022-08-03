import { RecipeDetailsViewModel } from '../RcipeDetailsViewModel/recipe-details-view-model';

export interface UserViewModel {
  userId: number;
  userName: string;
  bio?: string;
  city?: string;
  state?: string;
  country?: string;
  facebook?: string;
  twitter?: string;
  site?: string;
  userImage?: string;
  email?: string;
  password?: string;
  collections?: [];
  preferences?: [];
  recipes?: RecipeDetailsViewModel[];
  reviews?: [];
}
