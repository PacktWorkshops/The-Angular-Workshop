import { Component } from '@angular/core';
import { ProfileStore } from './profile-store';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileStore]
})
export class ProfileComponent {
  constructor (public profile: ProfileStore) {} 
}
