import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { TripPlanComponent } from './trip-plan/trip-plan.component';
import { ButtonComponent } from './button/button.component';
import { BackgroundColorDirective } from './background-color/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TripPlanComponent,
    ButtonComponent,
    BackgroundColorDirective,
  ],
  imports: [
    BrowserModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
