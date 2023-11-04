import React, { useContext } from "react";
import { motion } from "framer-motion";
import { GameContext } from "../pages";

const state_messsage = {
  user1: "You won",
  user2: "You lost",
  tied: "Tie game",
};

export function PlayAgainButton() {
  const {
    winner,
    user1_selection,
    stage,
    set_winner,
    set_user1_score,
    set_user1_selection,
    set_user2_selection,
    set_stage,
  } = useContext(GameContext);

  const playagain_onClickHandler = () => {
    if (!user1_selection || !winner || stage !== "winner") return;
    set_user1_score((prev) => {
      switch (winner) {
        case "user1":
          return prev + 1;
        case "tied":
          return prev;
        case "user2":
          return prev > 0 ? prev - 1 : prev;
        default:
          return prev;
      }
    });
    set_stage("select");
    setTimeout(() => {
      set_winner(null);
      set_user1_selection(null);
      set_user2_selection(null);
    }, 250);
  };

  return (
    <motion.div
      transition={{ delay: 0.8 }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      className="order-3 flex w-full flex-col items-stretch gap-4 md:order-2 md:w-auto  ">
      <h1 className=" text-center text-3xl font-bold uppercase tracking-wider text-white">
        {winner ? state_messsage[winner] : ""}
      </h1>
      <button
        onClick={playagain_onClickHandler}
        className="rounded-xl bg-white/90 px-10 py-4 font-semibold uppercase tracking-widest transition hover:bg-white">
        play again
      </button>
    </motion.div>
  );
}
