import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconCategoriesNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.823 2.341H5.388c-1.373 0-2.556 1.113-2.556 2.486v7.233c0 1.45 1.105 2.517 2.556 2.517h5.325c1.374 0 2.487-1.144 2.487-2.517V5.859L9.823 2.34Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.648 2.333v1.94c0 .947.766 1.715 1.713 1.716.877.003 1.775.003 1.836 0"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.396 7.476a.5.5 0 1 0-1 0V8.61H6.262a.5.5 0 0 0 0 1h1.134v1.134a.5.5 0 0 0 1 0V9.61h1.133a.5.5 0 1 0 0-1H8.396V7.476Z"
        fill="#262B2B"
      />
    </svg>
  );
};

export default SvgIconCategoriesNavbar;
