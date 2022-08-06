import { UserModel } from '../../User Model/user-model';

export interface ReviewModel {
  reviewId: number | null;
  recipeId: number;
  writerId: number;
  writerName: string;
  reviewRating?: number;
  reviewContent?: string;
  reviewDate?: Date;
}
