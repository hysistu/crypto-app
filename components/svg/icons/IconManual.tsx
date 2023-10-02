import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconManual = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
      {...props}
    >
      <path
        d="M11.875 11.25H6.25A3.75 3.75 0 0 1 2.5 7.5v0"
        stroke="#A8A8A8"
        strokeWidth={0.938}
        strokeLinecap="round"
      />
      <path
        d="M10 3.125h.75c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.966.784-1.75 1.75-1.75H5"
        stroke="#F3BB1C"
        strokeWidth={0.938}
      />
      <rect
        x={5}
        y={1.875}
        width={5}
        height={1.875}
        rx={0.625}
        stroke="#A8A8A8"
        strokeWidth={0.938}
      />
      <path
        d="m6.25 7.188.79.937L8.75 6.25"
        stroke="#A8A8A8"
        strokeWidth={0.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconManual;
