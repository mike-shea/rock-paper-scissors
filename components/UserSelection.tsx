import Image from 'next/image';
import TypeSelectionButton from './TypeSelectionButton';
import TrianlgeIcon from '../images/bg-triangle.svg';
import { UserCanSelect } from './types';

export default function UserSelection(props: { determineWin: (selection: UserCanSelect) => void }) {
  return (
    <div className="relative flex aspect-video w-full flex-col">
      <div className="absolute z-0 aspect-video h-full w-full ">
        <Image className="select-none" priority layout="fill" src={TrianlgeIcon.src} />
      </div>
      <div className="z-20 -mt-20 flex justify-between">
        <TypeSelectionButton determineWin={props.determineWin} type={UserCanSelect.paper} />
        <TypeSelectionButton determineWin={props.determineWin} type={UserCanSelect.rock} />
      </div>
      <div className="flex w-full grow"></div>
      <div className="z-20 -mb-20 flex justify-center ">
        <TypeSelectionButton determineWin={props.determineWin} type={UserCanSelect.scissors} />
      </div>
    </div>
  );
}
