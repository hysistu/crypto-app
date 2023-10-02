import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconZone = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 59 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M2.067 15.514c.42-3.55 8.403-5.147 12.342-5.502 3.029-.416 11.164-1.699 20.878-4.868C43.057 2.608 52.81 2.076 56.75 2L57 31.765c-15.354.254-47.438.431-52.204-.177-5.958-.76-3.255-11.637-2.729-16.074Z"
        fill="#E0EEE6"
        stroke="#3CC13B"
        strokeWidth={2}
      />
    </svg>
  );
};

export default SvgIconZone;
