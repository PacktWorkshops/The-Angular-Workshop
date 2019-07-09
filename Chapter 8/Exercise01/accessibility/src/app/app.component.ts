import { Component, ViewChildren, QueryList } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  countries = [
    {
      "id": "5b907501f4e1c6f",
      "name": "Nigeria"
    },
    {
      "id": "5b9d8b6f5f02db",
      "name": "Brazil"
    },
    {
      "id": "5b9s407c64d0d5",
      "name": "United States of American"
    },
    {
      "id": "5b90293487f9e21",
      "name": "Taiwan"
    },
   
  ]
 
  private keyManager: ActiveDescendantKeyManager<ListItemComponent>;
  model = '';

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap()
      .withTypeAhead();

  }

  onKeydown(event) {
    if (event.keyCode === ENTER) {
      this.model = this.keyManager.activeItem.item.name;
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
