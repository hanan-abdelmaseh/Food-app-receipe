import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { ImagesService } from 'src/app/Services/images.service';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
import { SliderImg } from 'src/app/SharedModule/Interface/slider-img';
import { MainReceipe } from 'src/app/viewModel/main-receipe';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public recipesList: RecipeModel[];
  title: string = 'Feed';
  text: string = 'Our Feed';
  imgagesList: SliderImg[] = [];
  shown: boolean = false;
  spinnerShown: boolean = false;
  pageNumber: number = 1;
  feedRecipes: MainReceipe[] = [];
  constructor(
    private _ImagesService: ImagesService,
    private recipeService: RecipeService,
    private route: Router
  ) {
    this.recipesList = this.recipeService.recipesList;
  }

  ngOnInit(): void {
    this.imgagesList = this._ImagesService.GetAllImg();
    this.getFeedRecipes();
  }

  getFeedRecipes() {
    this.spinnerShown = true;
    this.recipeService.getFeedRecipes(this.pageNumber).subscribe({
      next: (recipes) => {
        console.log(recipes);
        this.feedRecipes = recipes;
        if (recipes.length == 0) {
          this.shown = true;
        } else {
          this.shown = false;
        }
        this.spinnerShown = false;
      },
    });
  }

  decreaseCounter() {
    this.pageNumber--;
    this.getFeedRecipes();
  }

  increaseCounter() {
    this.pageNumber++;
    this.getFeedRecipes();
  }
}
