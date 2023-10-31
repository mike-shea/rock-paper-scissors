import React, { useContext } from "react";
import { TypeSelectionButton } from "./TypeSelectionButton";
import { selection_type, win_state } from "./types";
import { PlayAgainButton } from "./PlayAgainButton";
import { GameContext } from "../pages";
import { motion } from "framer-motion";

type UserSelectionProps = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}
function UserSelection({ className, text, children }: UserSelectionProps) {
  return (
    <div className={`flex flex-col items-center justify-center md:gap-4 ${className}`}>
        <p className="pb-8 text-center text-xl uppercase tracking-wide text-white">
          {text}
        </p>
        {children}
      </div>
  )
}

export function WhoWon() {
  const GameState = useContext(GameContext);

  return (
    <div className="flex items-center flex-wrap gap-2 sm:gap-8 flex-row">
      <UserSelection className="order-1" text="You Picked">
        <TypeSelectionButton
          disable={true}
          selection_type={GameState.user1_selection}
        />
      </UserSelection>

      <PlayAgainButton />

      <UserSelection className="order-2" text="House Picked">
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
            <TypeSelectionButton
              disable={true}
              selection_type={GameState.user2_selection}
            />
          </motion.div>
        </div>
      </UserSelection>
    </div>
  );
}
