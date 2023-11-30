import Image from "next/image";
import { SelectionButton } from "../SelectionButton";
import TrianlgeIcon from "../images/bg-triangle.svg";

export function SelectStage() {
  return (
    <div className="relative flex aspect-video w-full flex-col items-center">
      <div className="absolute inset-0 z-0 mt-10 flex w-full">
        <svg className={`flex h-auto w-full rotate-180 transform ${false && "mt-7 sm:mt-10 md:mt-6"}`} viewBox="0 0 1014 609">
          <path
            style={{ fill: "transparent" }}
            d="M507 90.2L891 551H123L507 90.2Z"
            stroke="#131A38"
            strokeOpacity={0.4}
            strokeWidth="40"
          />
        </svg>
      </div>
      <div className="z-20 flex w-full justify-between md:px-20">
        <SelectionButton selection_type="paper" />
        <SelectionButton selection_type="rock" />
      </div>
      <div className="flex w-full grow"></div>
      <div className="z-20 flex justify-center ">
        <SelectionButton selection_type="scissors" />
      </div>
    </div>
  );
}
