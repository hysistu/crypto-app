import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconReportingNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M10.794 1.333H5.207C3.18 1.333 2 2.52 2 4.553v6.887c0 2.067 1.18 3.227 3.207 3.227h5.587c2.06 0 3.206-1.16 3.206-3.227V4.554c0-2.034-1.147-3.22-3.206-3.22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.387 4.433v.007a.52.52 0 0 0 0 1.04h1.992a.522.522 0 0 0 0-1.047H5.387Zm5.226 4.06H5.387a.52.52 0 0 1 0-1.04h5.226a.521.521 0 0 1 0 1.04Zm0 3.047H5.387a.518.518 0 0 1-.5-.24.53.53 0 0 1 .5-.807h5.226a.523.523 0 0 1 .467.527c0 .266-.2.493-.467.52Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconReportingNavbarColor;
