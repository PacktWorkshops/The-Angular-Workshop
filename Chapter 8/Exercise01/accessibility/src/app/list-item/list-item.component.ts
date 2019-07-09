import { Component, OnInit, ViewChildren, HostBinding, Input } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements Highlightable {
  @Input() item;
  @Input() disabled = false;
  private _isActive = false;

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  };

  setActiveStyles() {
    this._isActive = true;
  };

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel() {
    return this.item.name;
  }

}