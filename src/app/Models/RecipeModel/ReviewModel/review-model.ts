import { UserModel } from '../../User Model/user-model';

export class ReviewModel {
  constructor(
    public reviewWriterId: number,
    public reviewDate: string,
    public reviewContent: string,
    public rating: number
  ) {}
}
