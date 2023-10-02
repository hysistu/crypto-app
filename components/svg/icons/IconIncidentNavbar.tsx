import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconIncidentNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.993 11.031V8.085M7.993 5.97H8"
        stroke="#130F26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.89 2.333H5.11c-2.013 0-3.276 1.426-3.276 3.444v5.446c0 2.018 1.257 3.444 3.277 3.444h5.778c2.021 0 3.278-1.426 3.278-3.444V5.777c0-2.018-1.257-3.444-3.277-3.444Z"
        stroke="#130F26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconIncidentNavbar;
