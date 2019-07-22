import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpecialOffer]'
})
export class SpecialOfferDirective implements OnInit {

  @Input() special: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.special) {
      this.element.nativeElement.classList.add('special-offer');
    }
  }

}
