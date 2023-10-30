import React, { useContext } from 'react';
import { PaperSvg, ScissorsSvg, RockSvg } from './SvgComponents';
import { GameContext } from '../pages';
import { get_user2_selection } from '../helpers/helpers';

import type { SvgProps } from './SvgComponents';
import type { selection_type } from './types';

type button_styles_config = {
  [index: string]: {
    layer1: string;
    layer2: string;
    icon: (props: SvgProps) => JSX.Element;
  }
}
const button_styles: button_styles_config = {
  rock: { 
    layer1: 'bg-red-700', 
    layer2: 'bg-red-500', 
    icon: RockSvg
  },
  paper: {
    layer1: 'bg-blue-700', 
    layer2: 'bg-blue-500', 
    icon: PaperSvg
  },
  scissors: {
    layer1: 'bg-yellow-700',
    layer2: 'bg-yellow-500',
    icon: ScissorsSvg
  }
}

type TypeSelectionButton = {
  selection_type: selection_type;
  disable?: boolean;
}
export function TypeSelectionButton({ selection_type, disable }: TypeSelectionButton) {
  const GameState = useContext(GameContext);
  const disabled = GameState.user1_selection !== selection_type;
  
  const button_style = button_styles[selection_type ?? 'paper'];

  return (
    <button
      disabled={disable ?? false}
      onClick={() => {
          GameState.set_user1_selection(selection_type)
          const user2_selection = get_user2_selection()
          GameState.set_user2_selection(user2_selection);
          
        }}
      className={`group rounded-full ${button_style.layer1}`}>
      <div
        className={`flex aspect-square h-44 w-44 -translate-y-3 items-center justify-center rounded-full transition ${
          !disabled && 'group-hover:-translate-y-4 group-active:-translate-y-1'
        } md:h-64 md:w-64 ${button_style.layer2}`}>
        <div className="flex aspect-square h-36 w-36 overflow-hidden rounded-full bg-slate-300 md:h-52 md:w-52">
          <div
            className={`flex aspect-square h-36 w-36 translate-y-2 items-center justify-center rounded-full bg-white transition ${
              !disabled && 'group-hover:translate-y-1 group-active:translate-y-3'
            }  md:h-52 md:w-52`}>
            <button_style.icon className='md:h-32 md:w-32 h-24 w-24' />
          </div>
        </div>
      </div>
    </button>
  );
}
