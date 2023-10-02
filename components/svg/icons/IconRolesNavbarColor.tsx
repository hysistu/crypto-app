import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconRolesNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M14.068 6.892h-.802v-.784a.604.604 0 0 0-.6-.608c-.33 0-.599.273-.599.608v.784h-.8c-.332 0-.6.273-.6.608 0 .335.268.608.6.608h.8v.785c0 .335.27.607.6.607.33 0 .599-.272.599-.607v-.785h.802c.33 0 .599-.273.599-.608a.605.605 0 0 0-.6-.608"
        />
        <path d="M6.334 10.51c-2.697 0-5 .432-5 2.155 0 1.722 2.289 2.169 5 2.169 2.697 0 5-.431 5-2.154 0-1.723-2.289-2.17-5-2.17" />
        <path
          opacity={0.4}
          d="M6.334 8.87c1.836 0 3.308-1.491 3.308-3.351 0-1.86-1.472-3.352-3.308-3.352-1.837 0-3.309 1.492-3.309 3.352 0 1.86 1.472 3.35 3.309 3.35"
        />
      </g>
    </svg>
  );
};

export default SvgIconRolesNavbarColor;
