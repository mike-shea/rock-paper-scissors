import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { GameContext } from '../pages';

import { get_number_from_selection } from '../helpers/helpers';
import { selection_type, win_state } from './types';

const state_messsage = {
  'user1': 'You won',
  'tied': 'Tie game',
  'user2': 'You lost',
}

function get_winner(user1_choice: selection_type, user2_choice: selection_type) {
  const user1_score = get_number_from_selection(user1_choice);
  const user2_score = get_number_from_selection(user2_choice);
  console.log({ user1_score, user2_score })
  const finalScore = (user1_score && user2_score) ? (user1_score - user2_score) : null;
  if (finalScore === null) throw new Error('unable to determine score.');
  switch (finalScore) {
    case 0: return 'tied';
    case 1: return 'user1';
    case 2: return 'user2';
    case -1: return 'user2';
    case -2: return 'user1';
    default: return null;
  }

}

export function PlayAgainButton() {
  const [winner, set_winner] = useState<'tied' | 'user1' | 'user2' | null>(null);
  const GameState = useContext(GameContext);
  const user1 = GameState.user1_selection;
  const user2 = GameState.user2_selection;

  if (!winner && user1 && user2) {
    const winner = get_winner(user1, user2);
    set_winner(winner);
  }

  const end_message =  winner ? state_messsage[winner] : '';

  return (
    <motion.div
      key="keyid2"
      transition={{ delay: 0.4, ease: 'anticipate', duration: 0.25 }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 'auto', opacity: 1 }}
      className="order-3 md:order-2 w-full md:w-auto">
      <motion.div
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        className="flex w-full flex-col items-stretch gap-4  ">
        <h1 className=" text-center text-3xl font-bold uppercase tracking-wider text-white">
          {end_message}
        </h1>
        <button
          onClick={() => {
            GameState.set_user1_score(prev => {
              switch (winner) {
                case 'user1': return prev + 1;
                case 'tied': return prev;
                case 'user2': return prev > 0 ? prev - 1 : prev;
                default: return prev;
              }
            });
            GameState.set_user1_selection(null);
            GameState.set_user2_selection(null);
            set_winner(null);
          }}
          className="rounded-xl bg-white px-10 py-4 font-semibold uppercase tracking-widest">
          play again
        </button>
      </motion.div>
    </motion.div>
  );
}
