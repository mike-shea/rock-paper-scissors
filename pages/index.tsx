import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, createContext } from "react";
import { Game } from "../components/Game";
import { Header } from "../components/Header";
import type { game_context_type, selection_type, stage_type, win_type } from "../types/types";

export const GameContext = createContext<game_context_type>({
  user1_selection: null,
  user2_selection: null,
  user1_score: 0,
  winner: null,
  stage: "select",
  set_user1_selection: () => {},
  set_user2_selection: () => {},
  set_user1_score: () => {},
  set_winner: () => {},
  set_stage: () => {},
});

const Home: NextPage = () => {
  const [user1_score, set_user1_score] = useState(0);
  const [user1_selection, set_user1_selection] = useState<selection_type>(null);
  const [user2_selection, set_user2_selection] = useState<selection_type>(null);
  const [stage, set_stage] = useState<stage_type>("select");
  const [winner, set_winner] = useState<win_type>(null);

  const GameStateValue = {
    user1_selection,
    user1_score,
    user2_selection,
    winner,
    stage,
    set_user1_selection,
    set_user1_score,
    set_user2_selection,
    set_winner,
    set_stage,
  };

  return (
    <>
      <Head>
        <title>Paper, Rock, Scissors</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="radialBgDiv"></div> */}
      <main className="mx-auto flex max-w-5xl flex-col gap-16 p-4 sm:p-8">
        <GameContext.Provider value={GameStateValue}>
          <Header />
          <Game />
        </GameContext.Provider>
      </main>
    </>
  );
};

export default Home;
