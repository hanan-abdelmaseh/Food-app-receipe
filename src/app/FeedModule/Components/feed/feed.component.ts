import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { ImagesService } from 'src/app/Services/images.service';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
import { SliderImg } from 'src/app/SharedModule/Interface/slider-img';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public recipesList: RecipeModel[];
  public currentRecipe: RecipeModel | null = null;
  public recipeAuther: UserModel | null = null;
  imgagesList: SliderImg[] = [];
  constructor(
    private _ImagesService: ImagesService,
    private recipeService: RecipeService,
    private route: Router
  ) {
    this.recipesList = this.recipeService.recipesList;
  }

  ngOnInit(): void {
    this.imgagesList = this._ImagesService.GetAllImg();
  }

  openRecipeDetails(recipeId: number) {
    this.route.navigate(['/recipe', recipeId]);

    // }
  }
}
