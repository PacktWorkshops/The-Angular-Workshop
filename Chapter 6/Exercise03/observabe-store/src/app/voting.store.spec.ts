import { TestBed } from '@angular/core/testing';
import { VotingStore } from './voting.store';

describe('VotingStore', () => {
  let store: VotingStore;

  const MOCK_NOMINEES = [{name: 'Test nominee 1', votes: 0}, {name: 'Test nominee 2', votes: 5}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotingStore]
    });

    store = new VotingStore();
    store.setState({
      nominees: MOCK_NOMINEES
    });
  });

  it('should correctly add a vote to a nominee', () => {
    store.addVote(MOCK_NOMINEES[1]);
    expect(store.state.nominees[0].votes).toBe(0);
    expect(store.state.nominees[1].votes).toBe(6);
  });

  it('should correctly add a nominee', () => {
    store.addNominee('Test nominee 3');
    expect(store.state.nominees[2].name).toBe('Test nominee 3');
  });
});
