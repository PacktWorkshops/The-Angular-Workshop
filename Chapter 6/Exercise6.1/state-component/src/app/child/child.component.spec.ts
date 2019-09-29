import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
    BrowserDynamicTestingModule, platformBrowserDynamicTesting
}
    from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { Component, NO_ERRORS_SCHEMA, Input, Output, EventEmitter, DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

describe('ChildComponent', () => {
    let fixture: ComponentFixture<ChildComponent>;
    let component: ChildComponent;
    let submitEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChildComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        submitEl = fixture.debugElement.query(By.css('button'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Entering email and password emits loggedIn event', () => {
        let message: string;
        component.messageToEmit.subscribe((value) => message = value);
        submitEl.triggerEventHandler('click', null);
        expect(message).toBe("Hello Parent !");
    });


});
