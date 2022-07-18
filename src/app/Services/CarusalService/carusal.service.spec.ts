import { TestBed } from '@angular/core/testing';

import { CarusalService } from './carusal.service';

describe('CarusalService', () => {
  let service: CarusalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarusalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
