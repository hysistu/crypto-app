import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconIsoChecklist = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M20 8.5v9.34a2.8 2.8 0 0 1-2.8 2.8H6.8a2.8 2.8 0 0 1-2.8-2.8V6.3a2.8 2.8 0 0 1 2.8-2.8h8.528"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="m15.56 3.597 4.343 4.343c.207.207.06.56-.231.56h-4.344A.328.328 0 0 1 15 8.172V3.828c0-.292.353-.438.56-.231Z"
        stroke="#A0B4FF"
        strokeWidth={1.5}
      />
      <path
        stroke="#A0B4FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        d="M9.75 15.75h4.5M8.75 12.75h6.5"
      />
    </svg>
  );
};

export default SvgIconIsoChecklist;
