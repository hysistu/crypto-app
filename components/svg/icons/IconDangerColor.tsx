import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDangerColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M6.69 29.987c-.018 0-.035 0-.055-.002a4 4 0 0 1-1.3-.287 4.014 4.014 0 0 1-2.207-5.223l10.371-18.17a3.986 3.986 0 0 1 1.558-1.553 4.014 4.014 0 0 1 5.449 1.565L30.809 24.35c.23.54.328.979.352 1.426a3.985 3.985 0 0 1-1.027 2.893 3.978 3.978 0 0 1-2.771 1.317l-20.57.002H6.69Z"
        fill="#F03738"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.76 14.196c0-.683.557-1.24 1.24-1.24.682 0 1.239.557 1.239 1.24v4.006a1.24 1.24 0 0 1-2.48 0v-4.006Zm0 8.853c0-.688.557-1.247 1.24-1.247.682 0 1.239.552 1.239 1.23 0 .7-.557 1.256-1.24 1.256-.682 0-1.24-.557-1.24-1.24Z"
        fill="#F03738"
      />
    </svg>
  );
};

export default SvgIconDangerColor;
