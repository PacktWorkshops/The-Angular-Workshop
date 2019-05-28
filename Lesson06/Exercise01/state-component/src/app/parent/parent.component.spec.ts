import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { RouterTestingModule } from '@angular/router/testing';
import {  BrowserDynamicTestingModule,  platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { Component, NO_ERRORS_SCHEMA, Input, Output, EventEmitter } from "@angular/core";
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let component2: ParentComponent;
  let fixture2: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture2 = TestBed.createComponent(ChildComponent);
    component2 = fixture.componentInstance;
    fixture2.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should set child to the name of the child', () => {
    expect(component.messageToSendP).toEqual('');
  });

  

  it('should set child to the name of the child', () => {
    expect(childComponents().map(c => c.receivedParentMessage)).toEqual(
      component.messageToSendP
    );
  });

  it('should update selected if child component emits select', () => {
    expect(childComponents().map(c => c.messageToEmit)).toEqual(
      component.messageToSendP
    );
  });

  // helper function to query all the ChildComponents
  function childComponents(): ChildComponent[] {
    return fixture.debugElement
      .queryAll(By.directive(ChildComponent))
      .map(el => el.componentInstance);
  }
});
