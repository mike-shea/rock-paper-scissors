import type { selection_type } from '../components/types';

function wait(amount = 0) {
  return new Promise((res) => setTimeout(res, amount));
}

function get_user2_selection() {
  const random = Math.ceil(Math.random() * 3);
  switch (random) {
    case 1: return 'rock';
    case 2: return 'paper';
    case 3: return 'scissors';
    default: return 'rock';
  }
}

function get_number_from_selection(selection: selection_type) {
  switch (selection) {
    case 'scissors': return 3;
    case 'paper': return 2;
    case 'rock': return 1;
    default: return null;
  }
}

export { wait, get_number_from_selection, get_user2_selection };
