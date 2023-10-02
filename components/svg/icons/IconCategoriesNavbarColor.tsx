import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconCategoriesNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
          d="M10.973 5.763c-.263 0-.612-.006-1.046-.006-1.06 0-1.93-.877-1.93-1.946V1.935a.266.266 0 0 0-.265-.268H4.647c-1.44 0-2.604 1.182-2.604 2.63v6.286c0 1.52 1.22 2.75 2.724 2.75H9.36c1.435 0 2.599-1.174 2.599-2.623V6.025a.265.265 0 0 0-.265-.267c-.246.002-.542.005-.722.005Z"
        />
        <path
          opacity={0.4}
          d="M9.385 1.998a.278.278 0 0 0-.479.195v1.538c0 .645.532 1.176 1.176 1.176.407.005.972.006 1.452.005.245 0 .37-.294.2-.471L9.385 1.998Z"
        />
        <path d="M8.384 7.638H7.376V6.631a.434.434 0 1 0-.868 0v1.007H5.5a.434.434 0 0 0 0 .87h1.008v1.006a.435.435 0 0 0 .868 0V8.507h1.008a.435.435 0 0 0 0-.869Z" />
      </g>
    </svg>
  );
};

export default SvgIconCategoriesNavbarColor;
