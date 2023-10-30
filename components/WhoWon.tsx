import React, { useContext } from 'react';
import { TypeSelectionButton } from './TypeSelectionButton';
import { win_state } from './types';
import { PlayAgainButton } from './PlayAgainButton';
import User2Selection from './User2Selection';
import { GameContext } from '../pages';

export function WhoWon() {
  const GameState = useContext(GameContext);

  return (
    <div className="-mt-16 flex flex-col items-center justify-center gap-8 md:-mt-0 md:flex-row">
      <div className="order-2 flex flex-row items-center justify-center gap-4 md:order-1 md:flex-col md:gap-0">
        <h2 className="pb-8 text-center text-xl uppercase tracking-wide text-white">You Picked</h2>
        <TypeSelectionButton disable={true} selection_type={GameState.user1_selection} />
      </div>

      <PlayAgainButton />

      <User2Selection />
    </div>
  );
}
