import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDashboardNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        opacity={0.4}
        d="M10.717 1.833h2.257a1.7 1.7 0 0 1 1.692 1.707v2.277a1.7 1.7 0 0 1-1.692 1.706h-2.257a1.7 1.7 0 0 1-1.693-1.706V3.54a1.7 1.7 0 0 1 1.693-1.707"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.025 1.833h2.258A1.7 1.7 0 0 1 6.975 3.54v2.277a1.7 1.7 0 0 1-1.692 1.706H3.025a1.7 1.7 0 0 1-1.692-1.706V3.54a1.7 1.7 0 0 1 1.692-1.707Zm0 7.644h2.258a1.7 1.7 0 0 1 1.692 1.707v2.276a1.7 1.7 0 0 1-1.692 1.707H3.025a1.7 1.7 0 0 1-1.692-1.707v-2.276a1.7 1.7 0 0 1 1.692-1.707Zm9.949 0h-2.257a1.7 1.7 0 0 0-1.693 1.707v2.276a1.7 1.7 0 0 0 1.693 1.707h2.257a1.7 1.7 0 0 0 1.692-1.707v-2.276a1.7 1.7 0 0 0-1.692-1.707Z"
        fill="#fff"
      />
    </svg>
  );
};

export default SvgIconDashboardNavbarColor;
