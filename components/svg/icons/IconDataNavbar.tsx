import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDataNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.3 6.45v4.002M7.023 4.536v5.917M9.7 8.565v1.888"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M9.734 1.667H4.267c-1.906 0-3.1 1.348-3.1 3.258v5.15c0 1.91 1.189 3.258 3.1 3.258h5.467c1.91 0 3.1-1.348 3.1-3.258v-5.15c0-1.91-1.19-3.258-3.1-3.258Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDataNavbar;
