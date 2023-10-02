import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconAddnew = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="m5.513 9.97 1.062-3.394 3.393-1.061-1.062 3.392L5.513 9.97Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={7.74}
        cy={7.741}
        r={6.407}
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconAddnew;
