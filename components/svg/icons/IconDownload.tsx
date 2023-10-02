import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDownload = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#3E66FB">
        <path
          opacity={0.4}
          d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.456.456 0 0 0 13.253 2H7.964C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.591 22 8.17 22h7.876c2.46 0 4.454-2.013 4.454-4.498V9.471a.454.454 0 0 0-.453-.458c-.423.003-.93.008-1.238.008Z"
        />
        <path
          opacity={0.4}
          d="M16.085 2.567a.477.477 0 0 0-.821.334v2.637c0 1.106.91 2.016 2.016 2.016.698.008 1.666.01 2.488.008a.477.477 0 0 0 .343-.808l-4.026-4.187Z"
        />
        <path d="M15.106 12.709a.745.745 0 0 0-1.054.002l-1.59 1.597V9.48a.746.746 0 0 0-1.49 0v4.827l-1.59-1.597a.744.744 0 1 0-1.055 1.05l2.863 2.877a.745.745 0 0 0 1.054 0h.002l2.862-2.876a.744.744 0 0 0-.002-1.053Z" />
      </g>
    </svg>
  );
};

export default SvgIconDownload;
