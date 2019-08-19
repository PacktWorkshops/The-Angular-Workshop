import { async, ComponentFixture, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainMapModule } from '../train-map/train-map.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainMapApiService } from '../train-map/train-map-api.service';
import { TrainMapStore } from '../train-map/train-map.store';
import { TrainMap } from '../train-map/train-map';
import { MAPS } from './../train-map/train-map-api.service.spec';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: TrainMapStore;
  let facade: TrainMap;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        CommonModule,
        FormsModule,
        TrainMapModule,
        HttpClientTestingModule
      ],
      providers: [
        TrainMapApiService,
        TrainMapStore,
        TrainMap
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    store = TestBed.get(TrainMapStore);
    facade = TestBed.get(TrainMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return ITrainMap[] from state', fakeAsync(() => {

    store.setState({
      maps: MAPS,
      selected: MAPS[1]
    });

    flushMicrotasks();

    component.state.subscribe((state) => {
      expect(state.maps).toEqual(MAPS);
    });

  }));

  it('should call facade select method ngOnInit', () => {

    spy = spyOn(facade, 'select').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();

  });

  it('should call facade select method when onMapSelect is called', () => {
    spy = spyOn(facade, 'select').and.callThrough();

    component.onMapSelect({
      target: {
        value: '1'
      }
    });

    expect(spy).toHaveBeenCalled();

  });


});
