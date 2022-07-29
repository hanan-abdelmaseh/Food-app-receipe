import { UserModel } from '../../User Model/user-model';

export interface ReviewModel {
  reviewWriterId: number;
  reviewDate: string;
  reviewContent: string;
  rating: number;
}
