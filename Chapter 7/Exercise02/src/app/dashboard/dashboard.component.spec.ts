import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainMapModule } from '../train-map/train-map.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainMapApiService } from '../train-map/train-map-api.service';
import { TrainMapStore } from '../train-map/train-map.store';
import { TrainMap } from '../train-map/train-map';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: TrainMapStore;
  let facade: TrainMap;

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

});
