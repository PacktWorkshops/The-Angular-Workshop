const NOMINEES = [
  {name: 'Kiella Fernandes', votes: 5},
  {name: 'Stephen Belovarich', votes: 4},
  {name: 'Will Huang', votes: 5},
  {name: 'Paul Oluyege', votes: 4}

];


export class VotingState {
  nominees: {name: string, votes: number}[] = NOMINEES;
}
