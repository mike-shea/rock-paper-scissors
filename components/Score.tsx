import React, { useContext } from 'react';
import { GameContext } from '../pages';

export default function Score() {
  const GameState = useContext(GameContext);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-white p-4">
      <h2 className="text-base font-semibold uppercase leading-none tracking-wide text-slate-400">
        Score
      </h2>
      <p className="text-5xl font-bold leading-none text-slate-800">{GameState.user1_score}</p>
    </div>
  );
}
