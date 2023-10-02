import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDanger = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M22.032 31.861c0-.81.658-1.48 1.469-1.48.81 0 1.468.648 1.468 1.459v.021a1.47 1.47 0 0 1-2.937 0Z"
        fill="#F03738"
      />
      <path
        d="M9.392 39.985h28.36a4.074 4.074 0 0 0 3.858-4.277 4.08 4.08 0 0 0-.296-1.322L27.064 9.445a4.07 4.07 0 0 0-5.535-1.59 4.05 4.05 0 0 0-1.592 1.59L5.687 34.386a4.074 4.074 0 0 0 3.562 5.6"
        stroke="#F03738"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M23.48 26.234v-6.07"
        stroke="#F03738"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDanger;
