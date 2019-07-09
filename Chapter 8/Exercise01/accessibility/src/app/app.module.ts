import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemComponent } from './list-item/list-item.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,ListItemComponent,FilterPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
