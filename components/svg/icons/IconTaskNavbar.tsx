import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconTaskNavbar = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        clipRule="evenodd"
        d="M10.417 12.41c1.094 0 1.98-.886 1.98-1.98V8.857a1.304 1.304 0 0 1-1.308-1.306c0-.724.584-1.306 1.307-1.306l-.001-1.577c0-1.093-.886-1.98-1.979-1.98H3.584a1.98 1.98 0 0 0-1.979 1.98v1.627c.722 0 1.306.532 1.306 1.256 0 .722-.584 1.306-1.307 1.306v1.575c0 1.093.886 1.979 1.98 1.979h6.833Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="m7 8.582 1.015.534a.13.13 0 0 0 .188-.137L8.01 7.85l.822-.8a.13.13 0 0 0-.072-.222l-1.135-.165-.508-1.029a.13.13 0 0 0-.232 0l-.508 1.03-1.135.164a.13.13 0 0 0-.072.221l.822.8-.195 1.131a.13.13 0 0 0 .189.137L7 8.582Z"
        stroke="#262B2B"
        strokeWidth={0.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconTaskNavbar;
