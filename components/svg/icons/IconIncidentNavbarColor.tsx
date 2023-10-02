import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconIncidentNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M10.893 1.333h-5.78c-2.26 0-3.78 1.587-3.78 3.947v5.447c0 2.353 1.52 3.94 3.78 3.94h5.78c2.26 0 3.773-1.587 3.773-3.94V5.28c0-2.36-1.513-3.947-3.773-3.947"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.417 5.46a.585.585 0 0 0 1.17 0 .584.584 0 0 0-1.17 0Zm1.164 2.115a.584.584 0 0 0-1.167 0v2.946a.584.584 0 0 0 1.167 0V7.575Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconIncidentNavbarColor;
