import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../pages';
import { LogoSvg } from './SvgComponents';
import Score from './Score';
import Game from './Game';

export default function Header() {
  const GameState = useContext(GameContext);

  return (
    <header className="flex w-full gap-4 justify-between rounded-xl border-2 border-slate-400/60 p-4">
      <LogoSvg />
      <Score />
    </header>
  );
}
