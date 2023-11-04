type selection_type = "paper" | "rock" | "scissors" | null;
type win_type = "user1" | "user2" | "tied" | null;
type stage_type = "select" | "winner";
type useStateType<T> = React.Dispatch<React.SetStateAction<T>>;

interface game_context_type {
  user1_selection: selection_type;
  user2_selection: selection_type;
  user1_score: number;
  winner: win_type;
  stage: stage_type;
  set_user1_selection: useStateType<selection_type>;
  set_user2_selection: useStateType<selection_type>;
  set_user1_score: useStateType<number>;
  set_winner: useStateType<win_type>;
  set_stage: useStateType<stage_type>;
}

interface SvgProps {
  className?: string;
  classGroup?: string;
}

export type {
  game_context_type,
  selection_type,
  useStateType,
  win_type,
  stage_type,
  SvgProps,
};
