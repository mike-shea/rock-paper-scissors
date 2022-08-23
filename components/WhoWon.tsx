import React from 'react';
import TypeSelectionButton from './TypeSelectionButton';
import { GameSelections, WinStates } from './types';
import PlayAgainButton from './PlayAgainButton';
import User2Selection from './User2Selection';

export default function WhoWon(props: {
  gameState: GameSelections;
  setReveal: React.Dispatch<React.SetStateAction<boolean>>;
  playAgain: () => void;
}) {
  let statemsg: string = '';
  if (props.gameState.winState === WinStates.lost) {
    statemsg = 'You lost';
  }
  if (props.gameState.winState === WinStates.tied) {
    statemsg = 'Tie game';
  }
  if (props.gameState.winState === WinStates.won) {
    statemsg = 'You won';
  }

  return (
    <div className="-mt-16 flex flex-col items-center justify-center gap-8 md:-mt-0 md:flex-row">
      <div className="order-2 flex flex-row items-center justify-center gap-4 md:order-1 md:flex-col md:gap-0">
        <h2 className="pb-8 text-center text-xl uppercase tracking-wide text-white">You Picked</h2>
        <TypeSelectionButton disable={true} user1={true} type={props.gameState.user1} />
      </div>

      <PlayAgainButton
        setReveal={props.setReveal}
        playAgain={props.playAgain}
        statemsg={statemsg}
      />

      <User2Selection gameState={props.gameState} />
    </div>
  );
}
