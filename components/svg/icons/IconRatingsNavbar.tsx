import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconRatingsNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.828 12.262V4.318"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m12.207 9.873-2.38 2.39-2.378-2.39"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M4.035 2.736v7.944"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m1.656 5.125 2.379-2.39 2.379 2.39"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconRatingsNavbar;
