import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreferencesModel } from 'src/app/Models/Preferences-Model/preferences-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor(private httpClient: HttpClient) {}

  getCurrentUserPreferences() {
    return this.httpClient.get<PreferencesModel[]>(
      `${environment.APIURL}Preferences/CurrentUserPreferences`
    );
  }

  setCurrentUserPreferemces(preferenceType: string, preferenceValue: string) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let pref = [
      {
        preferenceValue: preferenceValue,
        preferenceType: preferenceType,
      },
    ];
    return this.httpClient.post(
      `${environment.APIURL}Preferences/AddUserPreferences`,
      pref,
      {
        headers: httpHeaders,
        responseType: 'text',
      }
    );
  }

  removeFromPreferences(prefId: number) {
    return this.httpClient.delete(
      `${environment.APIURL}Preferences/DeleteUserPreferenceById/${prefId}`
    );
  }
}
