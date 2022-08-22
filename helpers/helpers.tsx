import { UserCanSelect } from '../components/types';

function user2Selection() {
  const random = Math.ceil(Math.random() * 3);
  if (random === 3) return UserCanSelect.scissors;
  if (random === 2) return UserCanSelect.paper;
  if (random === 1) return UserCanSelect.rock;
  return UserCanSelect.rock;
}

function wait(amount = 0) {
  return new Promise((res) => setTimeout(res, amount));
}

function determinePoints(selection: UserCanSelect) {
  if (selection === UserCanSelect.scissors) return 3;
  if (selection === UserCanSelect.paper) return 2;
  if (selection === UserCanSelect.rock) return 1;
}

export { user2Selection, wait, determinePoints };
