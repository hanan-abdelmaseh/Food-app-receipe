import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionModel } from 'src/app/Models/Collection Model/collection-model';
import { CollectionsService } from 'src/app/Services/Profile Services/Collections-Service/collections-service.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css'],
})
export class CollectionDetailsComponent implements OnInit {
  public currentCollectionName: string | null = null;
  public currentCollection: CollectionModel | undefined = undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionsService
  ) {}

  ngOnInit(): void {
    this.currentCollectionName =
      this.activatedRoute.snapshot.paramMap.get('collectionName');

    if (this.currentCollectionName != null) {
      this.currentCollection = this.collectionService.collectionsList?.find(
        (collection) => collection.collectionName == this.currentCollectionName
      );
    }

    console.log(this.currentCollectionName);
  }
}
