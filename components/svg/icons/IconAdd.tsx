import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconAdd = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 4.167v11.667M4.167 10h11.666"
        stroke="#fff"
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconAdd;
