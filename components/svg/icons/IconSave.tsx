import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconSave = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        clipRule="evenodd"
        d="M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49v10.737c0 2.176 1.658 3.887 3.834 3.887h7.988c2.06 0 3.73-1.827 3.73-3.887v-9.19l-5.066-5.276Z"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.474 2.75v2.909a2.575 2.575 0 0 0 2.569 2.575c1.316.003 2.663.004 2.754-.002"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.171 8.91a.75.75 0 0 0-1.063 0L8.27 11.763a.75.75 0 0 0 1.063 1.058l1.557-1.564v4.757a.75.75 0 0 0 1.5 0v-4.757l1.557 1.564a.75.75 0 0 0 1.063-1.058L12.171 8.91Z"
        fill="#3E66FB"
      />
    </svg>
  );
};

export default SvgIconSave;
