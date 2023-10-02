import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconRolesNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.585 10.637c-2.562 0-4.751.387-4.751 1.94 0 1.552 2.175 1.953 4.751 1.953 2.564 0 4.752-.388 4.752-1.94 0-1.55-2.175-1.953-4.752-1.953Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M6.585 8.424A3.045 3.045 0 1 0 3.54 5.378a3.034 3.034 0 0 0 3.024 3.046h.02Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.803 6.28v2.673M14.167 7.616H11.44"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconRolesNavbar;
