import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainMapModule } from '../train-map/train-map.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        CommonModule,
        FormsModule,
        TrainMapModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
