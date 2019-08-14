import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { TripPlanComponent } from './trip-plan/trip-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    TripPlanComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
