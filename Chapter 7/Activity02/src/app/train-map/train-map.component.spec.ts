import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainMapComponent } from './train-map.component';

describe('TrainMapComponent', () => {
  let component: TrainMapComponent;
  let fixture: ComponentFixture<TrainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
