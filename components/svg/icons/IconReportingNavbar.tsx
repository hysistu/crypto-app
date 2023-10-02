import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconReportingNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M10.477 11.315H5.664M10.477 8.524H5.664M7.5 5.74H5.665"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m10.605 2.333-5.126.003C3.64 2.347 2.5 3.558 2.5 5.404v6.131c0 1.856 1.148 3.071 3.004 3.071l5.126-.002c1.84-.011 2.98-1.222 2.98-3.069v-6.13c0-1.857-1.149-3.072-3.005-3.072Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconReportingNavbar;
