import { TestBed } from '@angular/core/testing';
import {ProfileStore  } from './profile-store';

describe('ProfileStore', () => {
  let store: ProfileStore;

  const MOCK_PROFILE_DATA = { first_name: 'Paul', last_name: 'Oluyege', prefeered_location: 'Ibadan' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileStore]
    });

    store = new ProfileStore();
    store.setState({
      profile_data: MOCK_PROFILE_DATA
    });
  });

  it('should correctly updates profile', () => {
    store.updateUser(MOCK_PROFILE_DATA.first_name, MOCK_PROFILE_DATA.last_name, MOCK_PROFILE_DATA.prefeered_location);
    expect(store.state.profile_data.first_name).toBe('Paul');
    expect(store.state.profile_data.last_name).toBe('Oluyege');
    expect(store.state.profile_data.prefeered_location).toBe('Ibadan');
  });

});
