import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe-services.service';

describe('RecipeServicesService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
