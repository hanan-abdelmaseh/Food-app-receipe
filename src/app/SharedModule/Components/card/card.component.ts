import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { MainReceipe } from 'src/app/viewModel/main-receipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() text: string[] = [];
  @Input() imgSrc: string = '';
  @Input() receipeRating: number = 0;

  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
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
  @Input() public recivedRecipe!: MainReceipe;
  // public currentRecipe: MainReceipe | null = null;
  public recipeAuther: UserModel | null = null;
  public currentUser: UserModel | null = null;
  constructor(
    private userService: CurrentUserService,
    private route: Router,
    private collectionService: CollectionsService
  ) {}

  //testing

  ngOnChanges(): void {}

  ngOnInit(): void {}

  openRecipeDetails() {
    window.open('recipe/' + this.recivedRecipe.recipeID, '_blank');
    // this.route.navigateByUrl();
  }
}
