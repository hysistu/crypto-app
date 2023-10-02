import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconAddTask = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M18 4.5h2.25a2.25 2.25 0 0 1 2.25 2.25V22.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 22.5V6.75A2.25 2.25 0 0 1 6.75 4.5H9m1.125-2.25h6.75c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 9 5.625v-2.25c0-.621.504-1.125 1.125-1.125Z"
        stroke="#3CC13B"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconAddTask;
