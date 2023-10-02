import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconStatusesNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M10.973 5.763c-.263 0-.612-.006-1.046-.006-1.06 0-1.93-.877-1.93-1.946V1.935a.266.266 0 0 0-.265-.268H4.647c-1.44 0-2.604 1.182-2.604 2.63v6.286c0 1.52 1.22 2.75 2.724 2.75h4.595c1.434 0 2.598-1.174 2.598-2.623V6.025a.264.264 0 0 0-.264-.267c-.247.002-.543.005-.723.005Z"
        />
        <path
          opacity={0.4}
          d="M9.385 1.998a.278.278 0 0 0-.479.195v1.538c0 .645.532 1.176 1.177 1.176.406.005.971.006 1.45.005.246 0 .371-.294.2-.471L9.386 1.998Z"
        />
        <path d="M8.414 10.057H5.24a.434.434 0 1 1 0-.869h3.175a.435.435 0 0 1 0 .869Z" />
      </g>
    </svg>
  );
};

export default SvgIconStatusesNavbarColor;
