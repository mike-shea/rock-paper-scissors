type selection_type = 'paper' | 'rock' | 'scissors' | null;
type useStateType<T> = React.Dispatch<React.SetStateAction<T>>
type win_state = 'user1' | 'user2' | 'tied' | null;
interface GameSelections {
  user1_selection: selection_type,
  set_user1_selection: useStateType<selection_type>,
  user2_selection: selection_type,
  set_user2_selection: useStateType<selection_type>,
  user1_score: number,
  set_user1_score: useStateType<number>,
}

export type { GameSelections, selection_type, useStateType, win_state };
