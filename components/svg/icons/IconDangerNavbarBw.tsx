import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDangerNavbarBw = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M11.25 16.27c0-.414.336-.756.75-.756s.75.33.75.745v.01a.75.75 0 0 1-1.5 0Z"
        fill="#262B2B"
      />
      <path
        d="M4.796 20.418h14.482a2.08 2.08 0 0 0 1.819-2.86L13.82 4.824a2.078 2.078 0 0 0-3.64 0L2.905 17.559a2.08 2.08 0 0 0 1.819 2.859"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M11.99 13.396v-3.1"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDangerNavbarBw;
