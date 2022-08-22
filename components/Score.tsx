export default function Score(props: { score: number }) {
  return (
    <div className="flex w-44 w-full flex-col items-center justify-center gap-1 rounded-lg bg-white p-4">
      <h2 className="text-base font-semibold uppercase leading-none tracking-wide text-slate-400">
        Score
      </h2>
      <p className="text-5xl font-bold leading-none text-slate-800">{props.score}</p>
    </div>
  );
}
