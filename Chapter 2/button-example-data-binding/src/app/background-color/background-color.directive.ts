import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

}
