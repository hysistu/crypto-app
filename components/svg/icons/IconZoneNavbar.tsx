import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconZoneNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        clipRule="evenodd"
        d="m4.824 9.222.93-2.969 2.968-.929-.929 2.969-2.969.929Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={6.774}
        cy={7.273}
        r={5.606}
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconZoneNavbar;
