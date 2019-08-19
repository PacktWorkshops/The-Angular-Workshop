import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainMapComponent } from './train-map.component';
import { MAPS } from './train-map-api.service.spec';

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
    component.map = MAPS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return calc(100% - 18px) when train stop tripCompletion equals 100', () => {
    const stop = component.map.items.find(st => st.tripCompletion === 100);
    expect(component.getPosition(stop)).toEqual(`calc(${100}% - 18px)`);
  });

  it('should return 0% when train stop tripCompletion equals 0', () => {
    const stop = component.map.items.find(st => st.tripCompletion === 0);
    expect(component.getPosition(stop)).toEqual(`${0}%`);
  });


});
