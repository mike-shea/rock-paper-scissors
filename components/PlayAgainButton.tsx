import React from 'react';
import { motion } from 'framer-motion';

export default function PlayAgainButton(props: {
  setReveal: React.Dispatch<React.SetStateAction<boolean>>;
  statemsg: string;
  playAgain: () => void;
}) {
  return (
    <motion.div
      key="keyid2"
      transition={{ delay: 0.4, ease: 'anticipate', duration: 0.25 }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 'auto', opacity: 1 }}
      className="order-3 md:order-2">
      <motion.div
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        onAnimationComplete={() => {
          props.setReveal(true);
        }}
        className="flex w-full flex-col items-stretch gap-4  ">
        <h1 className=" text-center text-3xl font-bold uppercase tracking-wider text-white">
          {props.statemsg}
        </h1>
        <button
          onClick={props.playAgain}
          className="rounded-xl bg-white px-10 py-4 font-semibold uppercase tracking-widest">
          play again
        </button>
      </motion.div>
    </motion.div>
  );
}
