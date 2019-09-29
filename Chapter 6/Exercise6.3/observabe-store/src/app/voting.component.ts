import { Component } from '@angular/core';
import { VotingStore } from './voting.store';

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  providers: [VotingStore]
})
export class VotingComponent {
  constructor (private store: VotingStore) {}
}
