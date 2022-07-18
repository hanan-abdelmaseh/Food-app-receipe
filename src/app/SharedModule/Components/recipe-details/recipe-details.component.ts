import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionModel } from 'src/app/Models/RecipeModel/NutritionModel/nutrition-model';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  public currentRecipe: RecipeModel | null = null;
  public recipeAuther: UserModel | null = null;
  public ingrediantsCount: number = 0;
  public recipeCalories!: NutritionModel;
  constructor(
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    public userService: CurrentUserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    //Get Recipe ID
    let recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');

    //Get Recipe
    if (recipeId != null) {
      this.recipeService.getCurrentRecipeById(+recipeId);

      if (this.recipeService.currentRecipe != null) {
        this.currentRecipe = this.recipeService.currentRecipe;

        //Get Recipe Auther
        this.userService.getUserById(this.currentRecipe.auther);
        if (this.userService.getUser != null) {
          this.recipeAuther = this.userService.getUser;
        }

        //Get Recipe ingrediants count
        this.currentRecipe.ingrediants.forEach((_) => {
          this.ingrediantsCount++;
        });

        //Get Recipe Calories
        this.recipeCalories = this.currentRecipe.nutritions.find(
          (nut) => (nut.nutritionName = 'calories')
        )!;
        //Navigate to NotFound in case of not found Recipe
      } else if (this.recipeService.currentRecipe == undefined) {
        this.route.navigate(['recipe/notfound']);
      }
    }
  }
}
