import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconStatusesNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        clipRule="evenodd"
        d="M8.597 2.111h-3.88c-1.202 0-2.237.974-2.237 2.176v6.328c0 1.27.968 2.202 2.237 2.202h4.66c1.201 0 2.175-1 2.175-2.202V5.19L8.598 2.111Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.445 2.104v1.697c0 .829.67 1.5 1.499 1.502.768.002 1.553.003 1.606 0"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M8.34 8.52H5.48"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconStatusesNavbar;
