import { Component, OnInit } from '@angular/core';
import { PreferencesModel } from 'src/app/Models/Preferences-Model/preferences-model';
import { PreferencesService } from 'src/app/Services/Profile Services/Preferences-Service/preferences.service';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css'],
})
export class UserPreferencesComponent implements OnInit {
  public shownPreferencesList = [false, false, false, false];

  public preferencesTypesList: string[];
  public unWantedPrefrences: PreferencesModel[] = [];
  public allPreferences: string[][];
  public preferencesList: PreferencesModel[] = [];
  constructor(private preferencesService: PreferencesService) {
    this.preferencesTypesList = [
      'Nutrition',
      'ALLERGIES',
      'Cusions',
      'Disliked Ingrediants',
    ];
    this.allPreferences = [
      [
        'Low Fat',
        'Low Calories',
        'High Fiber',
        'Low Carb',
        'Low Sodium',
        'Low Sugar',
      ],
      ['Egg Free', 'Lactose Free'],
      [
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
      ['Egg', 'Meat', 'Fish', 'Soy', 'Chicken'],
    ];
  }
  showThisPreferencesList(panelId: number) {
    this.shownPreferencesList[panelId] = !this.shownPreferencesList[panelId];
    for (let i = 0; i < this.shownPreferencesList.length; i++) {
      if (panelId != i) {
        this.shownPreferencesList[i] = false;
      }
    }
  }

  ngOnInit(): void {
    this.shownPreferencesList = [false, false, false, false];
    this.getUserPreferences();
  }

  getUserPreferences() {
    this.preferencesService.getCurrentUserPreferences().subscribe({
      next: (preferences) => {
        this.preferencesList = preferences;
        this.initializeUnWanted();
      },
    });
  }

  addToPreferencesList(type: string, name: string) {
    this.preferencesService.setCurrentUserPreferemces(type, name).subscribe({
      next: () => {
        this.getUserPreferences();
        this.initializeUnWanted();
      },
    });
  }
  removeFromPreferences(type: string, name: string, id: number) {
    this.preferencesService.removeFromPreferences(id).subscribe({
      next: () => {
        this.getUserPreferences();
      },
    });
  }

  async initializeUnWanted() {
    this.unWantedPrefrences = [];
    this.allPreferences.forEach((list, index) => {
      list.forEach((element) => {
        if (this.preferencesList.length == 0) {
          console.log('empty');
          this.unWantedPrefrences.push({
            preferenceType: this.preferencesTypesList[index],
            preferenceValue: element,
          });
        } else {
          let pref = this.preferencesList.find((item) => {
            return item.preferenceValue === element;
          });
          if (pref == undefined) {
            this.unWantedPrefrences.push({
              preferenceType: this.preferencesTypesList[index],
              preferenceValue: element,
            });
          }
        }
      });
    });
    console.log(this.unWantedPrefrences);
  }

  save() {
    console.log(this.preferencesList);
  }
}
