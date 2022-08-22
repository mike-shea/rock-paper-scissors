import React from 'react';
import { motion } from 'framer-motion';
import TypeSelectionButton from './TypeSelectionButton';
import { GameSelections } from './types';

export default function User2Selection(props: { gameState: GameSelections }) {
  return (
    <div className="order-2 flex flex-row items-center justify-center gap-4 md:order-3 md:flex-col md:gap-0">
      <h2 className="pb-8 text-center text-xl uppercase tracking-wide text-white">House Picked</h2>
      <div className="relative">
        <motion.div
          key="user2-unknown"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 1 }}
          className="absolute">
          <div className="aspect-square h-44 w-44 rounded-full bg-slate-900/50 md:h-64 md:w-64"></div>
        </motion.div>
        <motion.div
          key="user2-reveal"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.7 } }}>
          <TypeSelectionButton disable={true} user1={false} type={props.gameState.user2} />
        </motion.div>
      </div>
    </div>
  );
}
