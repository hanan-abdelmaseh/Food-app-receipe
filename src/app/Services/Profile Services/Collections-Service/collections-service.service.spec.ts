import { TestBed } from '@angular/core/testing';

import { CollectionsService } from './collections-service.service';

describe('CollectionsServiceService', () => {
  let service: CollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
