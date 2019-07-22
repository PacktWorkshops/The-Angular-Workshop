import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlanComponent } from './trip-plan.component';
import { TripStepPipe } from '../pipes/trip-step.pipe';

describe('TripPlanComponent', () => {
  let component: TripPlanComponent;
  let fixture: ComponentFixture<TripPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlanComponent , TripStepPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
