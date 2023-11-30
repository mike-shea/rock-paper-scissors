import React, { useContext } from "react";
import { GameContext } from "../pages";
import * as Svg from "./svgs";

export function Header() {
  const { user1_score } = useContext(GameContext);

  return (
    <header className="flex w-full justify-between gap-4 rounded-xl border-2 border-slate-400/60 p-4">
      <div className="h-12 w-auto">
        <Svg.Logo />
      </div>
      <div className="flex aspect-square h-full flex-col items-center justify-center gap-1 rounded-lg bg-white p-4">
        <h2 className="text-base font-semibold uppercase leading-none tracking-wide text-slate-400">Score</h2>
        <p className="text-5xl font-bold leading-none text-slate-800">{user1_score}</p>
      </div>
    </header>
  );
}
