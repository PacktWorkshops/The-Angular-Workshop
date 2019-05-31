import { Component } from '@angular/core';
import { VotingStore } from './voting.store';

@Component({
  selector: 'coffee-election',
  templateUrl: './coffee-election.component.html',
  providers: [VotingStore]
})
export class VotingComponent {
  constructor (private store: VotingStore) {}
}
