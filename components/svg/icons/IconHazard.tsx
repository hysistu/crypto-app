import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconHazard = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
      {...props}
    >
      <path
        d="M20 20 2 2M5 20h15V5"
        stroke="#F03738"
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconHazard;
