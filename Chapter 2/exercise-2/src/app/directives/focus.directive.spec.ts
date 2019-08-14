import { FocusDirective } from './focus.directive';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';

describe('FocusDirective', () => {

  @Component({
    template: `
    <input type="text" appFocus/>`
  })
  class TestComponent { }

  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, FocusDirective],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should add a focus',() => {
    const input: HTMLElement = fixture.nativeElement.querySelector('input');
    expect(document.activeElement).toBe(input);
  });
});
