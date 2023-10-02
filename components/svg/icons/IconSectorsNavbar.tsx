import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconSectorsNavbar = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        clipRule="evenodd"
        d="M2.826 7.428a5.119 5.119 0 0 1 10.238.034v.058c-.035 1.838-1.061 3.537-2.319 4.864a13.452 13.452 0 0 1-2.394 1.971.62.62 0 0 1-.812 0 13.212 13.212 0 0 1-3.368-3.153 6.55 6.55 0 0 1-1.345-3.757v-.017Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        opacity={0.4}
        cx={7.945}
        cy={7.526}
        r={1.641}
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconSectorsNavbar;
