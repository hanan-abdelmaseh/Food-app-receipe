import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.css'],
})
export class UserCollectionsComponent implements OnInit {
  collectionsList: CollectionModel[] | null = null;

  constructor(
    private collectionService: CollectionsService,
    private route: Router
  ) {}

  openColletionDetails(collectionName: string) {
    this.route.navigate(['/profile/collections', collectionName]);
  }
  ngOnInit(): void {
    this.collectionsList = this.collectionService.collectionsList;
  }
}
