import { Injectable } from '@angular/core';
import { Store } from '../store';
import { ProfileState } from './profile-state';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileStore extends Store<ProfileState> {
  public state: ProfileState;
  constructor () {
    super(new ProfileState());
  }
  updateUser(first_name: string,last_name:string,prefeered_location:string): void {
    this.setState({
      ...this.state,
      profile_data: {...this.state.profile_data,first_name: first_name,last_name: last_name,prefeered_location: prefeered_location}
    });
  }

}
