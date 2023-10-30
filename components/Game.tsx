import React, { useContext } from 'react';
import { WhoWon } from './WhoWon';
import UserSelection from './UserSelection';
import { AnimatePresence, motion } from 'framer-motion';
import { GameContext } from '../pages';

export default function Game() {
  const GameState = useContext(GameContext);

  return (
    <div className="flex grow justify-center ">
      <div className="w-full max-w-3xl pt-36">
        <AnimatePresence>
          {GameState.user1_selection === null ? (
            <motion.div
              key="one"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              <UserSelection />
            </motion.div>
          ) : (
            <motion.div
              key="two"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              <WhoWon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
