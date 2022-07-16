import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() public recivedRecipe: RecipeModel | null = null;
  public currentRecipe: RecipeModel | null = null;
  public recipeAuther: UserModel | null = null;
  constructor(private userService: CurrentUserService) {}

  ngOnChanges(): void {
    this.currentRecipe = this.recivedRecipe;
  }

  ngOnInit(): void {
    if (this.currentRecipe?.auther != null) {
      this.userService.getUserById(this.currentRecipe?.auther);
      this.recipeAuther = this.userService.getUser;
    }
  }
}
