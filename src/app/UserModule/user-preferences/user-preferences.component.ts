import { Component, OnInit } from '@angular/core';
import { PreferencesModel } from 'src/app/Models/Preferences-Model/preferences-model';
import { PreferencesService } from 'src/app/Services/Profile Services/Preferences-Service/preferences.service';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css'],
})
export class UserPreferencesComponent implements OnInit {
  public preferencesListIsShown = [false, false];

  public allPreferences: PreferencesModel[];
  public allCat = ['DIETS', 'ALLERGIES'];
  public preferencesList: PreferencesModel[];
  constructor(private preferencesService: PreferencesService) {
    this.allPreferences = this.preferencesService.allPreferences;
    this.preferencesList = this.preferencesService.preferencesList;
  }
  showThisPreferencesList(panelId: number) {
    if (this.preferencesListIsShown[panelId] == false) {
      for (let i = 0; i < this.preferencesListIsShown.length; i++) {
        if (panelId != i) {
          this.preferencesListIsShown[i] = false;
        } else this.preferencesListIsShown[i] = true;
      }
      console.log(this.preferencesListIsShown);
    } else this.preferencesListIsShown[panelId] = false;
  }

  ngOnInit(): void {
    this.preferencesListIsShown = [false, false, false];
  }

  addToPreferencesList(cat: string, pref: PreferencesModel) {
    this.preferencesService.addToFavourites(cat, pref);
  }
  removeFromPreferences(favouritePref: string, pref: PreferencesModel) {
    this.preferencesService.addToPreferences(favouritePref, pref);

    console.log('Removed');
  }
}
