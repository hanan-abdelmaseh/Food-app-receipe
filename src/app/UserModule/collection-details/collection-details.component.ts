import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css'],
})
export class CollectionDetailsComponent implements OnInit {
  public currentCollectionName: string = '';
  public currentCollection: CollectionModel | undefined = undefined;
  public collectionRecipe: RecipeModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionsService,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Getting Collection From Service Or DataBase By Colection Name
    this.currentCollectionName =
      this.activatedRoute.snapshot.paramMap.get('collectionName')!;

    if (this.currentCollectionName != null) {
      this.collectionService.getCollectionByName(this.currentCollectionName);
      this.currentCollection = this.collectionService.getCollection!;
    }

    //Fill Collection Recipes with Recipes Instead of IDs
    if (this.currentCollection?.collectioRecipes != undefined) {
      for (let x = 0; x < this.currentCollection.collectioRecipes.length; x++) {
        this.recipeService.getCurrentRecipeById(
          this.currentCollection.collectioRecipes[x]
        );
        if (this.recipeService.currentRecipe != null) {
          this.collectionRecipe.push(this.recipeService.currentRecipe);
        }
      }
    }
  }

  deleteCollection(collectionName: string) {
    this.collectionService.deleteCollection(collectionName);
    this.router.navigate(['profile']);
  }

  getCollectionRecipe() {}
  openRecipeDetails(recipeId: number) {
    this.router.navigate(['/recipe', recipeId]);
  }
  // removeRecipe(recipeId: number, collectionName: string) {
  //   this.collectionService.removeFromCollectionRecipes(
  //     collectionName,
  //     recipeId
  //   );
  // }
}
