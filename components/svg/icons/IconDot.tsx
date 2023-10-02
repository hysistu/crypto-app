import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDot = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <circle cx={4.5} cy={4.5} r={4.5} fill="#3CC13B" />
    </svg>
  );
};

export default SvgIconDot;
