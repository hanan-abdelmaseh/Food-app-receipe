import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    public userService: CurrentUserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');

    if (recipeId != null) {
      this.recipeService.getCurrentRecipeById(+recipeId);

      if (this.recipeService.currentRecipe != null) {
        this.currentRecipe = this.recipeService.currentRecipe;

        this.userService.getUserById(this.currentRecipe.auther);
        if (this.userService.getUser != null) {
          this.recipeAuther = this.userService.getUser;
        }
      } else if (this.recipeService.currentRecipe == undefined) {
        this.route.navigate(['recipe/notfound']);
      }
    }
  }
}
