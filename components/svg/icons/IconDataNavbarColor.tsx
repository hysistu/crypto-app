import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDataNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M9.727 1.167h-5.45c-1.986 0-3.111 1.125-3.111 3.111v5.445c0 1.986 1.125 3.11 3.111 3.11h5.45c1.986 0 3.106-1.124 3.106-3.11V4.278c0-1.986-1.12-3.111-3.106-3.111"
        />
        <path d="M4.298 5.466a.486.486 0 0 0-.483.487v4.008a.485.485 0 0 0 .97 0V5.953a.487.487 0 0 0-.487-.487M7.02 3.552a.486.486 0 0 0-.482.488V9.96a.485.485 0 0 0 .97 0V4.04a.487.487 0 0 0-.488-.488M9.706 7.581a.487.487 0 0 0-.487.487v1.893a.485.485 0 0 0 .97 0V8.068a.486.486 0 0 0-.483-.487" />
      </g>
    </svg>
  );
};

export default SvgIconDataNavbarColor;
