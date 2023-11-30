import React, { useContext } from "react";
import * as Svg from "./svgs";
import { GameContext } from "../pages";

import type { SvgProps, selection_type } from "../types";

type button_styles_config = {
  [index in NonNullable<selection_type>]: {
    layer1: string;
    layer2: string;
    Icon: (props: SvgProps) => JSX.Element;
  };
};

// colours neeed to be explicitly written so tailwind will create the classes @ build time
// for example - "bg-{color}-500" wouldnt build
const button_styles: button_styles_config = {
  paper: {
    layer1: "bg-blue-700",
    layer2: "bg-blue-500",
    Icon: Svg.Paper,
  },
  rock: {
    layer1: "bg-red-700",
    layer2: "bg-red-500",
    Icon: Svg.Rock,
  },
  scissors: {
    layer1: "bg-yellow-700",
    layer2: "bg-yellow-500",
    Icon: Svg.Scissors,
  },
};

type SelectionButtonProps = {
  selection_type: selection_type;
  disable?: boolean;
};
export function SelectionButton({ selection_type, disable }: SelectionButtonProps) {
  const { user1_selection, set_user1_selection, stage, set_stage } = useContext(GameContext);

  const styles = {
    layer1: selection_type ? button_styles?.[selection_type]?.layer1 : "",
    layer2: selection_type ? button_styles?.[selection_type]?.layer2 : "",
    Icon: selection_type ? button_styles?.[selection_type]?.Icon : () => <></>,
  };

  return (
    <button
      disabled={disable ?? false}
      onClick={() => {
        // prevents user from double clicking
        if (user1_selection || stage === "winner") return;

        // set user selection
        set_user1_selection(selection_type);
        set_stage("winner");
      }}
      className={`group rounded-full ${styles.layer1}`}>
      <div
        className={`flex aspect-square h-32 w-32 -translate-y-3 items-center justify-center rounded-full transition sm:h-44 sm:w-44 md:h-52 md:w-52 ${
          !disable && "group-hover:-translate-y-4 group-active:-translate-y-1"
        } ${styles.layer2}`}>
        <div className="flex aspect-square h-4/5 w-4/5 overflow-hidden rounded-full bg-slate-300">
          <div
            className={`flex aspect-square h-[100%] w-[100%] translate-y-2 items-center justify-center rounded-full bg-white transition ${
              !disable && "group-hover:translate-y-1 group-active:translate-y-3"
            } `}>
            <styles.Icon className="" classGroup="h-[55%] w-[55%]" />
          </div>
        </div>
      </div>
    </button>
  );
}
