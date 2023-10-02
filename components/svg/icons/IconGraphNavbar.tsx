import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconGraphNavbar = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        clipRule="evenodd"
        d="M11.52 9.26c.45 0 .828.37.759.815a5.372 5.372 0 0 1-5.339 4.554 5.405 5.405 0 0 1-5.405-5.405c0-2.459 1.868-4.75 3.971-5.267.452-.112.915.206.915.672 0 3.152.106 3.967.705 4.41.599.444 1.302.22 4.394.22Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M14.465 6.634c.036-2.025-2.452-5.29-5.483-5.233a.452.452 0 0 0-.435.435c-.077 1.666.026 3.824.084 4.802a.594.594 0 0 0 .56.561c1.006.058 3.243.136 4.884-.112a.463.463 0 0 0 .39-.453Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconGraphNavbar;
