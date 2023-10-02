import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconLogoutBw = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.017 7.39v-.934a3.685 3.685 0 0 0-3.685-3.685H6.455a3.685 3.685 0 0 0-3.684 3.685v11.13a3.685 3.685 0 0 0 3.684 3.686h4.885a3.675 3.675 0 0 0 3.676-3.674v-.944"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.81 12.021H9.769M18.882 9.106l2.928 2.915-2.928 2.916"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconLogoutBw;
