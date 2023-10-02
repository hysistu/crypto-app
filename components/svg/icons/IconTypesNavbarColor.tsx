import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconTypesNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M14.665 8.5A6.666 6.666 0 0 1 8 15.167a6.666 6.666 0 1 1 0-13.334A6.667 6.667 0 0 1 14.665 8.5Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.58 8.92a.584.584 0 0 1-1.166 0V5.975a.584.584 0 0 1 1.167 0v2.947Zm-1.162 2.116a.585.585 0 0 1 1.17 0 .584.584 0 0 1-1.17 0Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconTypesNavbarColor;
