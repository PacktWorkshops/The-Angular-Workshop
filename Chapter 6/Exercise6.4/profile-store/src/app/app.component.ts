import { Component } from '@angular/core';
import { ProfileStore } from './profile-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileStore]
})
export class AppComponent {
  constructor (private profile:ProfileStore) {
  } 

 
}
