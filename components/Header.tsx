import React, { useState, useEffect } from 'react';
import { LogoSvg } from './SvgComponents';
import Score from './Score';

export default function Header(props: { score: number; reveal: boolean }) {
  const [headerScore, setHeaderScore] = useState(props.score);

  useEffect(() => {
    props.reveal && setHeaderScore(props.score);
  }, [props.reveal]);
  return (
    <header className="flex w-full justify-between rounded-xl border-2 border-slate-400/60 p-4">
      <div className="maxx-w-xs w-full">
        <LogoSvg />
      </div>
      <Score score={headerScore} />
    </header>
  );
}
