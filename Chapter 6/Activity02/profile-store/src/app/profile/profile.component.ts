import { Component, OnInit } from '@angular/core';
import { ProfileStore } from '../profile-store';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileStore]
})
export class ProfileComponent {
  constructor (private profile:ProfileStore) {
  } 

}
