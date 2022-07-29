import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrwosingComponent } from './brwosing.component';

describe('BrwosingComponent', () => {
  let component: BrwosingComponent;
  let fixture: ComponentFixture<BrwosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrwosingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrwosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
