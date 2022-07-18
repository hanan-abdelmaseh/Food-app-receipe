import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusalComponent } from './carusal.component';

describe('CarusalComponent', () => {
  let component: CarusalComponent;
  let fixture: ComponentFixture<CarusalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarusalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarusalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
