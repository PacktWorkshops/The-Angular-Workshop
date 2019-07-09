import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTreeModule} from '@angular/cdk/tree';
import { FlatTreeComponent } from './flat-tree/flat-tree.component';
import { NestedTreeComponent } from './nested-tree/nested-tree.component';
@NgModule({
  declarations: [
    AppComponent,
    NestedTreeComponent,
    FlatTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
