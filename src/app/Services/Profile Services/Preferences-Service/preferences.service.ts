import { Injectable } from '@angular/core';
import { PreferencesModel } from 'src/app/Models/Preferences-Model/preferences-model';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  public preferencesList: PreferencesModel[];
  public allPreferences: PreferencesModel[];
  constructor() {
    this.preferencesList = [
      {
        name: 'Nutrition',
        categories: [],
      },
      {
        name: 'ALLERGIES',
        categories: [],
      },
      {
        name: 'Cusions',
        categories: [],
      },
      {
        name: 'Disliked Ingrediants',
        categories: [],
      },
    ];
    this.allPreferences = [
      {
        name: 'Nutrition',
        categories: [
          'Low Fat 10g or less per serving',
          'Low Calories 400 kcal or less per serving',
          'High Fiber 6g or more per serving ',
          'Low Carb 30g or less per serving',
          'Low Sodium 500mg or less per serving',
          'Low Sugar 10g or less per serving',
        ],
      },
      {
        name: 'ALLERGIES',
        categories: [
          'WHEATFREE',
          'DAIRY FREE',
          'PEANUT-FREE',
          'TREE NUT-FREE',
          'SULFITE-FREE',
          'SOY-FREE',
          'SESAME-FREE',
          'SEAFOOD-FREEE',
          'GG-FREE',
          'GLUTEN-FREE',
        ],
      },

      {
        name: 'Cusions',
        categories: [
          'Southwest Asia (middle East)',
          'Asian',
          'European',
          'Southwestern U.S.',
          'Chinese',
          'Japanese',
          'Greek',
          'Indonesian',
          'African',
          'Moroccan',
          'South African',
          'Native American',
          'South American',
          'Caribbean',
          'Cuban',
          'Spanish',
          'Canadian',
          'Kid Friendly',
          'Turkish',
          'Hawaiian',
          'German',
        ],
      },
      {
        name: 'Disliked Ingrediants',
        categories: ['Egg', 'Meat', 'Fish', 'Soy', 'Chicken'],
      },
    ];
  }

  addToFavourites(cat: string, pref: PreferencesModel) {
    this.preferencesList.forEach((preference, index) => {
      if (preference.name == pref.name) {
        preference.categories.push(cat);
      }
    });
    this.removeFromPreference(cat, pref);
  }

  removeFromPreference(cat: string, pref: PreferencesModel) {
    this.allPreferences.forEach((element, index1) => {
      if (element.name == pref.name) {
        element.categories.forEach((x, index2) => {
          if (x == cat) {
            this.allPreferences[index1].categories.splice(index2, 1);
          }
        });
      }
    });
  }

  addToPreferences(cat: string, pref: PreferencesModel) {
    this.allPreferences.forEach((preference, index) => {
      if (preference.name == pref.name) {
        preference.categories.push(cat);
      }
    });
    console.log('Added');
    this.removeFromFavourites(cat, pref);
    console.log('Removed');
  }

  removeFromFavourites(cat: string, pref: PreferencesModel) {
    this.preferencesList.forEach((element, index1) => {
      if (element.name == pref.name) {
        element.categories.forEach((x, index2) => {
          if (x == cat) {
            this.preferencesList[index1].categories.splice(index2, 1);
          }
        });
      }
    });
  }
}
