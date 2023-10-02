import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconUserNavbar = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M10.434 6.857a1.677 1.677 0 0 0 1.442-1.658c0-.833-.608-1.523-1.404-1.654"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.508 8.813c.788.117 1.338.393 1.338.962 0 .391-.259.646-.678.806"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M6.933 9.054c-1.875 0-3.476.284-3.476 1.418S5.048 11.9 6.933 11.9c1.875 0 3.476-.281 3.476-1.417 0-1.135-1.591-1.428-3.476-1.428Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M6.935 7.434a2.228 2.228 0 1 0-2.228-2.227 2.219 2.219 0 0 0 2.211 2.228h.017Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M3.43 6.857a1.677 1.677 0 0 1-1.442-1.658c0-.833.608-1.523 1.404-1.654"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.358 8.813c-.788.117-1.338.393-1.338.962 0 .391.259.646.677.806"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconUserNavbar;
