import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, createContext } from 'react';
import Game from '../components/Game';
import Header from '../components/Header';
import type { GameSelections, selection_type } from '../components/types';


export const GameContext = createContext<GameSelections>({
  user1_selection: null,
  set_user1_selection: () => {},
  user2_selection: null,
  set_user2_selection: () => {},
  user1_score: 0,
  set_user1_score: () => {}
}); 

const Home: NextPage = () => {
  const [user1_score, set_user1_score] = useState(0);
  const [user1_selection, set_user1_selection] = useState<selection_type>(null);
  const [user2_selection, set_user2_selection] = useState<selection_type>(null);
  
  const GameStateValue = {
    user1_selection,
    user1_score,
    user2_selection,
    set_user1_selection,
    set_user1_score,
    set_user2_selection,
  }

  return (
    <div className="">
      <Head>
        <title>Paper, Rock, Scissors</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="radialBgDiv"></div>
      <main className="flex flex-col gap-12 mx-auto max-w-5xl p-12">
        <GameContext.Provider value={GameStateValue}>
          <Header />
          <Game />
        </GameContext.Provider>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
