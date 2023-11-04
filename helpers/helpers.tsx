import type { selection_type } from "../types/types";

function wait(amount = 0) {
  return new Promise((res) => setTimeout(res, amount));
}

function get_user2_selection() {
  const random = Math.ceil(Math.random() * 3);
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "rock";
  }
}

function get_winner(
  user1_choice: selection_type,
  user2_choice: selection_type
) {
  const user1_score = convert_selection_to_number(user1_choice);
  const user2_score = convert_selection_to_number(user2_choice);

  // return if score could not be retrieved
  if (!user1_score || !user2_score) return null;

  const finalScore = user1_score - user2_score;
  switch (finalScore) {
    case 0:
      return "tied";
    case 1:
      return "user1";
    case -2:
      return "user1";
    case 2:
      return "user2";
    case -1:
      return "user2";
    default:
      return null;
  }
}

function convert_selection_to_number(selection: selection_type) {
  switch (selection) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
    default:
      return null;
  }
}

export { wait, get_winner, get_user2_selection };
