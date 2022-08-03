import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';
import { CurrentUserService } from 'src/app/Services/Profile Services/Current-User-Service/current-user.service';
import { UserSettingsService } from 'src/app/Services/Profile Services/User-Settings-Service/user-settings.service';
import { CollectionViewModel } from 'src/app/viewModel/CollectionViewModel/collection-view-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.css'],
})
export class UserCollectionsComponent implements OnInit {
  isAddFormShown: boolean = false;
  collectionsList: CollectionViewModel[] = [];
  newCollectionName: string = '';
  constructor(
    public collectionService: CollectionsService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getAllCollections();
  }

  openColletionDetails(collectionIndex: number) {
    this.route.navigate(['/profile/collections', collectionIndex]);
  }

  getAllCollections() {
    this.collectionService.getAllCollections().subscribe({
      next: (allCollections) => {
        this.collectionsList = allCollections;
      },
    });
  }

  addCollection(collectionName: string) {
    console.log(collectionName);
    this.collectionService.addCollection(collectionName).subscribe({
      next: () => {
        Swal.fire('Added').then(() => {
          this.isAddFormShown = false;
          this.getAllCollections();
        });
      },
    });
  }
  showHideAddForm() {
    console.log('open/colse');
    this.isAddFormShown = !this.isAddFormShown;
  }
}
