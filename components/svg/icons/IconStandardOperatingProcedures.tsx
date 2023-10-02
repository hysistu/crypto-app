import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconStandardOperatingProcedures = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M10 6a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 14 6v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 7V6Z"
        stroke="#1E861D"
        strokeWidth={1.5}
      />
      <rect
        x={17}
        y={16.5}
        width={4}
        height={4}
        rx={1.5}
        stroke="#1E861D"
        strokeWidth={1.5}
      />
      <rect
        x={3}
        y={16.5}
        width={4}
        height={4}
        rx={1.5}
        stroke="#1E861D"
        strokeWidth={1.5}
      />
      <path
        d="M9 18.5h6M15 9.5l3 5M6 14.5l3-5"
        stroke="#3CC13B"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgIconStandardOperatingProcedures;
