import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
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
  public currentUser: UserModel | null = null;
  constructor(
    private userService: CurrentUserService,
    private route: Router,
    private collectionService: CollectionsService
  ) {
    this.currentRecipe = this.recivedRecipe;
  }

  ngOnChanges(): void {
    this.currentRecipe = this.recivedRecipe;
  }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
    if (this.currentRecipe?.auther != null) {
      this.userService.getUserById(this.currentRecipe?.auther);
      this.recipeAuther = this.userService.getUser;
    }
  }

  addToCollectionRecipes(collectionName: string, recipeId: number) {
    this.collectionService.addToCollectionRecipes(collectionName, recipeId);

    console.log(this.currentUser?.userCollections);
    console.log(this.collectionService?.userCollectionsList);
  }

  openRecipeDetails(recipeId: number) {
    this.route.navigate(['/recipe', recipeId]);
    console.log('navigate to' + recipeId);
  }
}
