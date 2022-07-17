import { CollectionModel } from '../Collection Model/collection-model';
import { PreferencesModel } from '../Preferences-Model/preferences-model';

export interface UserModel {
  userCollections?: CollectionModel[];
  wantedPreferences?: PreferencesModel[];
  unWantedPreferences?: PreferencesModel[];
  userName: string;
  bio: string;
  id: number;
  city: string;
  state: string;
  country: string;
  userFacebook: string;
  userTwitter: string;
  userSite: string;
}
