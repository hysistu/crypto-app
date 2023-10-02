import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconCalendarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M2.577 7.837H17.43"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.548 11.091a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5h-.008a.75.75 0 0 1-.75-.75Zm4.456-.75a.75.75 0 0 0 0 1.5h.008a.75.75 0 1 0 0-1.5h-.008Zm3.698 0a.75.75 0 0 0 0 1.5h.007a.75.75 0 0 0 0-1.5h-.007Zm0 3.24a.75.75 0 1 0 0 1.5h.007a.75.75 0 0 0 0-1.5h-.007Zm-4.448.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 1 1 0 1.5h-.008a.75.75 0 0 1-.75-.75Zm-2.956-.75a.75.75 0 1 0 0 1.5h.008a.75.75 0 0 0 0-1.5h-.008Z"
        fill="#3E66FB"
      />
      <path
        d="M13.37 1.667v2.742M6.638 1.667v2.742"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M13.532 2.983H6.476C4.029 2.983 2.5 4.346 2.5 6.852v7.541c0 2.546 1.529 3.94 3.976 3.94h7.048c2.455 0 3.976-1.37 3.976-3.877V6.852c.008-2.506-1.513-3.87-3.968-3.87Z"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconCalendarColor;
