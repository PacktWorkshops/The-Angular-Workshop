import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { inject } from '@angular/core';

describe('CarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarService = TestBed.get(CarService);
    expect(service).toBeTruthy();
  });

  it('retrieves all the cars', ( ) => {
     const service: CarService = TestBed.get(CarService);
    service.getCars().subscribe(result => expect(result.length).toBeGreaterThan(0)); 
});
});
