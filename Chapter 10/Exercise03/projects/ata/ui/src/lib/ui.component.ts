import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui',
  template: `
    <p>
      ng-packagr is awesome!
    </p>
  `,
  styles: []
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
