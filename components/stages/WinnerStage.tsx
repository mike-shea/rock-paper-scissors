import React, { useContext } from "react";
import { SelectionButton } from "../SelectionButton";
import { PlayAgainButton } from "../PlayAgainButton";
import { GameContext } from "../../pages";
import { motion } from "framer-motion";
import { get_user2_selection, get_winner } from "../../helpers/helpers";

type UserSelectionProps = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
};

function UserSelection({ className, text, children }: UserSelectionProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center md:gap-4 ${className}`}>
      <p className="pb-8 text-center text-xl uppercase tracking-wide text-white">
        {text}
      </p>
      {children}
    </div>
  );
}

export function WinnerStage() {
  const {
    winner,
    user1_selection,
    user2_selection,
    set_winner,
    set_user2_selection,
  } = useContext(GameContext);

  if (user1_selection && !winner && !user2_selection) {
    const user2_pick = get_user2_selection();
    set_user2_selection(user2_pick);
    const winner_result = get_winner(user1_selection, user2_pick);
    set_winner(winner_result);
  }

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-8">
      <UserSelection className="order-1" text="You Picked">
        <SelectionButton disable={true} selection_type={user1_selection} />
      </UserSelection>

      <PlayAgainButton />

      <UserSelection className="order-2" text="House Picked">
        <div className="relative">
          {/* <motion.div
            key="user2-unknown"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 1 }}
            className="absolute">
            <div className="aspect-square h-44 w-44 rounded-full bg-slate-900/50 md:h-64 md:w-64"></div>
          </motion.div> */}
          <motion.div
            key="user2-reveal"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.25,
                ease: "easeOut",
              },
            }}>
            <SelectionButton disable={true} selection_type={user2_selection} />
          </motion.div>
        </div>
      </UserSelection>
    </div>
  );
}
