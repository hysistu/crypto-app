import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconNotifications = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M10.442 17.5a1.667 1.667 0 0 1-2.884 0M14 6.667a5 5 0 0 0-10 0c0 5.833-2.5 7.5-2.5 7.5h15S14 12.5 14 6.667Z"
        stroke="#868B9F"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconNotifications;
