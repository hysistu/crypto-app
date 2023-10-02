import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconMore = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M10 10.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5ZM10 16.666A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.666Z"
        stroke="#868B9F"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconMore;
