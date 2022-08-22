import React, { useState } from 'react';
import { PaperSvg, ScissorsSvg, RockSvg } from './SvgComponents';
import { UserCanSelect } from './types';

export default function TypeSelectionButton(props: {
  user1?: boolean | undefined;
  type: UserCanSelect | null;
  disable?: boolean;
  determineWin?: (selection: UserCanSelect) => void;
}) {
  const [disable, setDisable] = useState(props.disable || false);
  const iconSize = {
    containerClass: 'md:h-32 md:w-32 h-24 w-24',
    className: ''
  };

  const styleConfig: {
    layer1: string;
    layer2: string;
    icon: JSX.Element | undefined;
  } = { layer1: '', layer2: '', icon: undefined };

  if (props.type === UserCanSelect.paper) {
    styleConfig.layer1 = 'bg-blue-700';
    styleConfig.layer2 = 'bg-blue-500';
    styleConfig.icon = <PaperSvg {...iconSize} />;
  }
  if (props.type === UserCanSelect.rock) {
    styleConfig.layer1 = 'bg-red-700';
    styleConfig.layer2 = 'bg-red-500';
    styleConfig.icon = <RockSvg {...iconSize} />;
  }

  if (props.type === UserCanSelect.scissors) {
    styleConfig.layer1 = 'bg-yellow-700';
    styleConfig.layer2 = 'bg-yellow-500';
    styleConfig.icon = <ScissorsSvg {...iconSize} />;
  }

  return (
    <button
      disabled={disable}
      onClick={() => {
        if (props.type !== null && props.determineWin) {
          setDisable(true);
          props.determineWin(props.type);
        }
      }}
      className={`group rounded-full ${styleConfig.layer1}`}>
      <div
        className={`flex aspect-square h-44 w-44 -translate-y-3 items-center justify-center rounded-full transition ${
          !disable && 'group-hover:-translate-y-4 group-active:-translate-y-1'
        } md:h-64 md:w-64 ${styleConfig.layer2}`}>
        <div className="flex aspect-square h-36 w-36 overflow-hidden rounded-full bg-slate-300 md:h-52 md:w-52">
          <div
            className={`flex aspect-square h-36 w-36 translate-y-2 items-center justify-center rounded-full bg-white transition ${
              !disable && 'group-hover:translate-y-1 group-active:translate-y-3'
            }  md:h-52 md:w-52`}>
            {styleConfig.icon}
          </div>
        </div>
      </div>
    </button>
  );
}
