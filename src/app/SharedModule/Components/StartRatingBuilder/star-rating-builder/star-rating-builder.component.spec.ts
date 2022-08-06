import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingBuilderComponent } from './star-rating-builder.component';

describe('StarRatingBuilderComponent', () => {
  let component: StarRatingBuilderComponent;
  let fixture: ComponentFixture<StarRatingBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
