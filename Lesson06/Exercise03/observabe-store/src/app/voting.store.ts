import { Injectable } from '@angular/core';
import { Store } from './store';
import { VotingState } from './voting-state';

@Injectable()
export class VotingStore extends Store<VotingState> {
  constructor () {
    super(new VotingState());
  }

  addVote (nominee: {name: string, votes: number}): void {
    this.setState({
      ...this.state,
      nominees: this.state.nominees.map(c => {
        if (c === nominee) {
          return {...c, votes: c.votes + 1};
        }
        return c;
      })
    });
  }

  addNominee (name: string): void {
    this.setState({
      ...this.state,
      nominees: [...this.state.nominees, {name: name, votes: 0}]
    });
  }
}
