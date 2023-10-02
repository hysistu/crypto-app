import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconAccordion = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M5.01 5.86a.862.862 0 0 0 .599-.248l4.137-4.138A.863.863 0 1 0 8.529.251L5 3.78 1.472.25A.863.863 0 0 0 .254 1.474l4.137 4.138a.862.862 0 0 0 .62.247Z"
        fill="#454545"
      />
    </svg>
  );
};

export default SvgIconAccordion;
