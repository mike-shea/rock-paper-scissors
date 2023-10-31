import Image from 'next/image';
import { TypeSelectionButton } from './TypeSelectionButton';
import TrianlgeIcon from '../images/bg-triangle.svg';

export default function UserSelection() {
  return (
    <div className="relative flex aspect-video w-full flex-col">
      <div className="flex w-full absolute z-0">
        <svg className='flex transform rotate-180 mt-16 h-auto w-full' viewBox="0 0 1014 609">
        <path
          style={{fill: 'transparent'}}
          d="M507 90.2L891 551H123L507 90.2Z"
          stroke="#131A38"
          strokeOpacity={0.4}
          stroke-width="40"
        />
        </svg>
      </div>
      <div className="z-20 flex justify-between">
        <TypeSelectionButton selection_type='paper' />
        <TypeSelectionButton selection_type='rock' />
      </div>
      <div className="flex w-full grow"></div>
      <div className="z-20 -mb-20 flex justify-center ">
        <TypeSelectionButton selection_type='scissors' />
      </div>
    </div>
  );
}
