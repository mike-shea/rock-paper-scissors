import React from 'react';

import { GameSelections, UserCanSelect, WinStates } from './types';
import WhoWon from './WhoWon';
import { user2Selection, determinePoints } from '../helpers/helpers';
import UserSelection from './UserSelection';
import { AnimatePresence, motion } from 'framer-motion';

export default function Game(props: {
  gameState: GameSelections;
  setReveal: React.Dispatch<React.SetStateAction<boolean>>;
  setGameState: React.Dispatch<React.SetStateAction<GameSelections>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  playAgain: () => void;
}) {
  function determineWin(selection: UserCanSelect) {
    props.setReveal(false);
    const user2Choice = user2Selection();
    const user1 = determinePoints(selection);
    const user2 = determinePoints(user2Choice);

    if (user1 && user2) {
      const finalScore = user1 - user2;
      if (finalScore === 0) {
        props.setGameState({ user1: selection, user2: user2Choice, winState: WinStates.tied });
      }
      if (finalScore === 2 || finalScore === -1) {
        props.setGameState({ user1: selection, user2: user2Choice, winState: WinStates.lost });
        props.setScore((prev) => prev - 1);
      }
      if (finalScore === 1 || finalScore === -2) {
        props.setGameState({ user1: selection, user2: user2Choice, winState: WinStates.won });
        props.setScore((prev) => prev + 1);
      }
    }
  }

  return (
    <div className="flex grow justify-center ">
      <div className="w-full max-w-3xl pt-36">
        <AnimatePresence>
          {props.gameState.user1 === null ? (
            <motion.div
              key="one"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              <UserSelection key="UserSelection" determineWin={determineWin} />
            </motion.div>
          ) : (
            <motion.div
              key="two"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              <WhoWon
                key="WhoWon1"
                setReveal={props.setReveal}
                gameState={props.gameState}
                playAgain={props.playAgain}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
