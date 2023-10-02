import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconVideo = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
      {...props}
    >
      <rect
        x={2.5}
        y={2.5}
        width={10}
        height={10}
        rx={1.875}
        stroke="#3CC13B"
        strokeWidth={0.938}
      />
      <path
        d="M9.17 7.14a.454.454 0 0 1-.008.763L6.977 9.3c-.314.201-.73-.021-.727-.388l.026-2.83c.003-.367.424-.582.734-.376L9.17 7.14Z"
        stroke="#A8A8A8"
        strokeWidth={0.938}
      />
    </svg>
  );
};

export default SvgIconVideo;
