import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { LoadingPanelComponent } from './loading-panel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,LoadingPanelComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadingPanelComponent
    ]

})
export class AppModule { }
