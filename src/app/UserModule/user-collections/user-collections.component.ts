import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { UserSettingsService } from 'src/app/Services/Profile Services/User-Settings-Service/user-settings.service';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.css'],
})
export class UserCollectionsComponent implements OnInit {
  isAddFormShown: boolean = false;
  collectionsList: CollectionModel[] | null = null;
  newCollectionName: string | null = null;
  constructor(
    public collectionService: CollectionsService,
    private route: Router
  ) {}

  openColletionDetails(collectionName: string) {
    this.route.navigate(['/profile/collections', collectionName]);
  }
  ngOnInit(): void {
    this.collectionService.getAllCollections();
    this.collectionsList = this.collectionService.userCollectionsList;
  }

  showHideAddForm() {
    console.log('open/colse');
    this.isAddFormShown = !this.isAddFormShown;
  }

  addCollection(name: string) {
    this.newCollectionName = name;
    console.log(this.newCollectionName);
  }
}
