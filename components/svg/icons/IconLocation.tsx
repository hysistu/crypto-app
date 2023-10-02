import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconLocation = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M11.083 4.958 7 9.042 2.917 4.958"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
      />
    </svg>
  );
};

export default SvgIconLocation;
