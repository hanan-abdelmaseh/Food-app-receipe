import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imgSrc: string = '';
  /*add to collection button */
  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
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

  //testing

  ngOnChanges(): void {
    this.currentRecipe = this.recivedRecipe;
  }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
    if (this.currentRecipe?.auther != null) {
      let user = this.userService.getUserById(this.currentRecipe?.auther)!;
      this.recipeAuther = user;
    }
  }

  openRecipeDetails(recipeId: number) {
    this.route.navigate(['/recipe', recipeId]);
    console.log('navigate to' + recipeId);
  }
}
