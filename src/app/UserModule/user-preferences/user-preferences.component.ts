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

  public allPreferences: PreferencesModel[];
  public allCat = ['Nutrition', 'Allegries', 'Cusion', 'Disliked Ingredients'];
  public preferencesList: PreferencesModel[];
  constructor(private preferencesService: PreferencesService) {
    this.allPreferences = this.preferencesService.allPreferences;
    this.preferencesList = this.preferencesService.preferencesList;
  }
  showThisPreferencesList(panelId: number) {
    if (this.shownPreferencesList[panelId] == false) {
      for (let i = 0; i < this.shownPreferencesList.length; i++) {
        if (panelId != i) {
          this.shownPreferencesList[i] = false;
        } else this.shownPreferencesList[i] = true;
      }
    } else this.shownPreferencesList[panelId] = false;
  }

  ngOnInit(): void {
    this.shownPreferencesList = [false, false, false, false];
  }

  addToPreferencesList(cat: string, pref: PreferencesModel) {
    this.preferencesService.addToFavourites(cat, pref);
  }
  removeFromPreferences(favouritePref: string, pref: PreferencesModel) {
    this.preferencesService.addToPreferences(favouritePref, pref);

    console.log('Removed');
  }

  save() {
    console.log(this.preferencesList);
  }
}
