
import { SpecialOfferDirective } from './special-offer.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('SpecialOfferDirective', () => {

  let fixture: ComponentFixture<TestComponent>;

  @Component({
    template: `
        <div appSpecialOffer [special]='true'></div>
        <span appSpecialOffer [special]='false'></span>
        `
  })
  class TestComponent { }

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, SpecialOfferDirective],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });


  it('should add a special-offer class', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.classList).toContain('special-offer');
  });

  it('should not add a special-offer class', () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(span.classList).not.toContain('special-offer');
  });

});
