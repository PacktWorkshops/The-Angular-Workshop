import { Store } from '../store';
import { ProfileState } from './profile.state';
export declare class ProfileStore extends Store<ProfileState> {
    state: ProfileState;
    constructor();
    updateUser(first_name: string, last_name: string, prefeered_location: string): void;
}
