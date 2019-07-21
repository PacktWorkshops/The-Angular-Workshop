import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { TripPlanComponent } from './trip-plan/trip-plan.component';
import { FocusDirective } from './directives/focus.directive';
import { TripStepPipe } from './pipes/trip-step.pipe';
import { StationsComponent } from './stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    TripPlanComponent,
    FocusDirective,
    TripStepPipe,
    StationsComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
