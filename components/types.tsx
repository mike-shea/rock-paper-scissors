enum UserCanSelect {
  paper = 'paper',
  rock = 'rock',
  scissors = 'scissors'
}

interface GameSelections {
  user1: UserCanSelect | null;
  user2: UserCanSelect | null;
  winState: WinStates | null;
}

enum WinStates {
  won,
  lost,
  tied
}

export { WinStates, UserCanSelect };
export type { GameSelections };
