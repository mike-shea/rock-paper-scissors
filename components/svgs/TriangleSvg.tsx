import { SvgProps } from "../../types/types";

export function TriangleSvg(props: SvgProps) {
  return (
    <svg
      className={props.classGroup}
      width="313"
      height="278"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 313 278">
      <path
        className={props.className}
        stroke="#000"
        strokeWidth="15"
        fill="none"
        opacity=".2"
        d="M156.5 262 300 8H13z"
      />
    </svg>
  );
}
