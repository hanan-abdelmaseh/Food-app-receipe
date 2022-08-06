import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
import { CollectionViewModel } from 'src/app/viewModel/CollectionViewModel/collection-view-model';
import Swal from 'sweetalert2';
import { RecipeDetailsViewModel } from 'src/app/viewModel/RcipeDetailsViewModel/recipe-details-view-model';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css'],
})
export class CollectionDetailsComponent implements OnInit {
  public currentCollectionIndex!: number;
  public recipes: MainReceipe[] = [];
  public currentCollection: CollectionViewModel | undefined = undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionsService,
    // private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Getting Collection From Service Or DataBase By Colection Name

    this.currentCollectionIndex =
      +this.activatedRoute.snapshot.paramMap.get('collectionIndex')!;
    if (this.currentCollectionIndex != null) {
      this.getCollectionByIndex(this.currentCollectionIndex);
    }
  }

  getCollectionByIndex(index: number) {
    this.collectionService.getAllCollections().subscribe({
      next: (allCollections) => {
        this.currentCollection = allCollections[index];
        this.getCollectionRecipes();
      },
    });
  }

  getCollectionRecipes() {
    this.collectionService
      .getCollectionRecipes(this.currentCollection!.collectionId)
      .subscribe({
        next: (recipes) => {
          console.log(recipes);
          this.recipes = recipes;
        },
      });
  }
  deleteCollection(collectionId: number) {
    this.collectionService.deleteCollection(collectionId).subscribe({
      next: () => {
        Swal.fire('Deleted').then((_) => {
          this.router.navigate(['profile']);
        });
      },
    });
  }
  editCollection(
    collectionName: string,
    collectionImage: string,
    collecionDesc?: string
  ) {
    this.collectionService
      .updateCollection(
        this.currentCollection!.collectionId,
        collectionName,
        collectionImage,
        this.currentCollection!.collectionRecipes!,
        collecionDesc
      )
      .subscribe({
        next: () => {
          this.getCollectionByIndex(this.currentCollectionIndex!);
        },
      });
  }

  openRecipeDetails(recipeId: number) {
    this.router.navigate(['/recipe', recipeId]);
  }
  // addRecipeToCollection(recipeId: number, collectionId: number) {
  //   this.collectionService
  //     .addRecipeToCollection(recipeId, collectionId)
  //     .subscribe({});
  // }
  // getCollectionRecipe() {}
  // openRecipeDetails(recipeId: number) {
  //   this.router.navigate(['/recipe', recipeId]);
  // }
}
