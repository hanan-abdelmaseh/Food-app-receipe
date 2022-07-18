import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/Models/RecipeModel/recipe-model';
import { UserModel } from 'src/app/Models/User Model/user-model';
import { CurrentUserService } from '../Profile Services/Current-User-Service/current-user.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipesList: RecipeModel[];
  public currentRecipe?: RecipeModel;
  constructor() {
    this.recipesList = [
      {
        auther: 1,
        avgRating: 3,
        directions: 'Dgfrgf',
        ingrediants: ['chicked', 'rice', 'water'],
        nutritions: [
          {
            nutritionName: 'CALORIES',
            nutritionQuantity: 858,
          },
          {
            nutritionName: 'SODIUM',
            nutritionQuantity: 858,
          },
          {
            nutritionName: 'CARBS',
            nutritionQuantity: 253,
          },
          {
            nutritionName: 'FIBER',
            nutritionQuantity: 725,
          },
          {
            nutritionName: 'FAT',
            nutritionQuantity: 583,
          },
          {
            nutritionName: 'PROTEIN',
            nutritionQuantity: 45,
          },
        ],
        numberAddingToCollections: 3,
        recipeId: 1,
        recipeImg:
          'https://lh3.googleusercontent.com/y__X45OA9m35h4ZRYbxGBxziURMTUm6quQtFTxtiUCEqnzypGg8ZF6hSX6nMWNLKTnCDmyduiKR6fpIwKnVvLA=s640-c-rw-v1-e365',
        recipeName: 'Chiken Wings',
        seving: 10,
        tags: ['dinner', 'Juice', 'orange', 'soup', 'Meat'],
        time: '10',
        reviews: [
          {
            rating: 5,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 1,
          },
        ],
      },
      {
        auther: 2,
        avgRating: 5,
        directions:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        ingrediants: ['ground ginger', 'ground cardamom', 'Rice', 'water'],
        nutritions: [
          {
            nutritionName: 'CALORIES',
            nutritionQuantity: 858,
          },
          {
            nutritionName: 'SODIUM',
            nutritionQuantity: 210,
          },
          {
            nutritionName: 'CARBS',
            nutritionQuantity: 525,
          },
          {
            nutritionName: 'FIBER',
            nutritionQuantity: 544,
          },
          {
            nutritionName: 'FAT',
            nutritionQuantity: 583,
          },
          {
            nutritionName: 'PROTEIN',
            nutritionQuantity: 159,
          },
        ],
        numberAddingToCollections: 1502,
        recipeId: 2,
        recipeImg:
          'https://lh3.googleusercontent.com/qflddJtvZRaWPPxX-10NTcH37bGdjaxcgzf14AhtyQ5CCPogzIviqZkNuW5i-oMLXjJQgMQmyW9GyeQsURtWfQ=s640-c-rw-v1-e365',
        recipeName: 'Tamales',
        seving: 10,
        tags: [
          'Quick And Easy',
          'Quick',
          'Easy',
          'dinner',
          'Juice',
          'orange',
          'soup',
          'Meat',
        ],
        time: '10',
        reviews: [
          {
            rating: 5,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 2,
          },
          {
            rating: 4,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 3,
          },
          {
            rating: 2,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 4,
          },
        ],
      },
      {
        auther: 3,
        avgRating: 1,
        directions:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        ingrediants: [
          'ground cardamom',
          'dinner',
          'Juice',
          'orange',
          'soup',
          'water',
        ],
        nutritions: [
          {
            nutritionName: 'CALORIES',
            nutritionQuantity: 858,
          },
          {
            nutritionName: 'SODIUM',
            nutritionQuantity: 10,
          },
          {
            nutritionName: 'CARBS',
            nutritionQuantity: 253,
          },
          {
            nutritionName: 'FIBER',
            nutritionQuantity: 20,
          },
          {
            nutritionName: 'FAT',
            nutritionQuantity: 583,
          },
          {
            nutritionName: 'PROTEIN',
            nutritionQuantity: 45,
          },
        ],
        numberAddingToCollections: 1502,
        recipeId: 3,
        recipeImg:
          'https://lh3.googleusercontent.com/9Fn_vrzLW0Y9Dz894BUAIHNrIal3zYTwxzxKSbZga8Z5xN0l620z8OB-BRE11JC8l7bI2vdjvWXoILEg6nZAevq_mT0bJlBa9WY=s640-c-rw-v1-e365',
        recipeName: 'Smashed Cowboy Kabobs',
        seving: 10,
        tags: ['Easy', 'dinner', 'Juice', 'orange', 'soup', 'Meat'],
        time: '10',
        reviews: [
          {
            rating: 2,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 3,
          },
          {
            rating: 1,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 2,
          },
          {
            rating: 5,
            reviewContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            reviewDate: '18/8/12',
            reviewWriterId: 4,
          },
        ],
      },
    ];
  }

  getCurrentRecipeById(recipeId: number) {
    this.recipesList?.forEach((recipe) => {
      if (recipeId == recipe.recipeId) {
        this.currentRecipe = recipe;
      }
    });
  }
}
