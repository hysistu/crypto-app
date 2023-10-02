import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconAddUser = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          clipRule="evenodd"
          d="M9.877 15.206c-3.844 0-7.127.581-7.127 2.91 0 2.327 3.263 2.93 7.127 2.93 3.845 0 7.126-.583 7.126-2.91s-3.261-2.93-7.126-2.93ZM9.877 11.886A4.568 4.568 0 1 0 5.31 7.318a4.551 4.551 0 0 0 4.536 4.568h.03Z"
        />
        <path d="M19.204 8.669v4.01M21.25 10.674h-4.09" />
      </g>
    </svg>
  );
};

export default SvgIconAddUser;
