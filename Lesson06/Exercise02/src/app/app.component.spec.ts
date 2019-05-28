import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { DebugElement } from '@angular/core';
import { Car } from './car.model';
import { Observable, of } from 'rxjs';
import { By } from "@angular/platform-browser";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [CarService],
    }).compileComponents();
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exercise-observable'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('exercise-observable');
  });


  //This test fails because taskTitles is undefined!
  it('test whether a correct test has loaded', () => {
    beforeEach(() => {
      let comp: AppComponent;
      let fixture: ComponentFixture<AppComponent>;
      let service: CarService;

      let debugTaskTitle: DebugElement[];
      let taskTitles: any[];
      fixture = TestBed.createComponent(AppComponent);
      service = fixture.debugElement.injector.get(CarService);

      let dummyTasks: any[] = [
        {
          "id": 2,
          "make": 'Toyota',
          "model": 'Highlander',
          "year": 2010,
          "image_url": 'highlander.jpg'
        },
        {
          "id": 3,
          "make": 'Toyota',
          "model": 'Corolla',
          "year": 2019,
          "image_url": 'corolla.png'
        }
      ];

      spyOn(service, 'getCars').and.returnValue(of<any[]>(dummyTasks));

      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;

      fixture.whenStable().then(() => {
        // after something in the component changes, you should detect changes
        fixture.detectChanges();

        // everything else in the beforeEach needs to be done here.
        debugTaskTitle = fixture.debugElement.queryAll(By.css('div.card-title'));

        let counter: number = 0;

        for (let title of debugTaskTitle) {
          taskTitles.push(title.nativeElement);
          taskTitles[counter].innerText = dummyTasks[counter].make;
          counter++;
        }
        expect(taskTitles).toBe(["Toyota", "Toyota"]);
      });

    });
  });
});
