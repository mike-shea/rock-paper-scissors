import React, { useContext } from "react";
import { WinnerStage } from "./stages/WinnerStage";
import { SelectStage } from "./stages/SelectStage";
import { AnimatePresence, motion } from "framer-motion";
import { GameContext } from "../pages";

type transitionWrapperProps = { key: string; children: React.ReactNode };
function TransitionWrapper({ key, children }: transitionWrapperProps) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.25 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}>
      {children}
    </motion.div>
  );
}

export function Game() {
  const { stage } = useContext(GameContext);

  return (
    <AnimatePresence>
      {stage === "select" ? (
        <TransitionWrapper key={stage}>
          <SelectStage />
        </TransitionWrapper>
      ) : null}
      {stage === "winner" ? (
        <TransitionWrapper key={stage}>
          <WinnerStage />
        </TransitionWrapper>
      ) : null}
    </AnimatePresence>
  );
}
