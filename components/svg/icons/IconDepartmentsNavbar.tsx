import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDepartmentsNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.202 8.091H.875"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M12.105 5.62V4.481c0-1.067-.872-1.94-1.94-1.94h-.958M1.973 5.62V4.48c0-1.07.866-1.936 1.934-1.937h.98"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.105 8.091v2.643c0 1.067-.872 1.94-1.94 1.94h-.958M1.973 8.091v2.646c0 1.069.866 1.935 1.934 1.936l.98.001"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDepartmentsNavbar;
