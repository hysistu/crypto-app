import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconArrowHorizontally = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M7.41 10.59 2.83 6l4.58-4.59L6 0 0 6l6 6 1.41-1.41Z"
        fill="#848FAC"
      />
    </svg>
  );
};

export default SvgIconArrowHorizontally;
