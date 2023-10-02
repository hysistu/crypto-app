import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconNotification = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g
        stroke="#F3BB1C"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          clipRule="evenodd"
          d="M23.5 34.952c11.044 0 16.152-1.417 16.646-7.103 0-5.683-3.562-5.318-3.562-12.29 0-5.446-5.162-11.642-13.084-11.642s-13.084 6.196-13.084 11.642c0 6.972-3.562 6.607-3.562 12.29.495 5.707 5.604 7.103 16.646 7.103Z"
        />
        <path
          opacity={0.4}
          d="M28.178 40.846c-2.671 2.966-6.839 3.001-9.536 0"
        />
      </g>
    </svg>
  );
};

export default SvgIconNotification;
