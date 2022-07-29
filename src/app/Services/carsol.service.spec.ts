import { TestBed } from '@angular/core/testing';

import { CarsolService } from './carsol.service';

describe('CarsolService', () => {
  let service: CarsolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
