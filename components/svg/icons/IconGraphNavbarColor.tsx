import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconGraphNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
        <path d="M6.767 4.204c.034.069.057.143.067.22l.185 2.759.092 1.387c.001.143.024.285.067.42a.695.695 0 0 0 .67.422l4.438-.29a.732.732 0 0 1 .516.2c.115.108.19.251.213.405l.008.093c-.184 2.543-2.051 4.665-4.59 5.212-2.537.548-5.14-.609-6.394-2.842a5.476 5.476 0 0 1-.664-2.097 4.013 4.013 0 0 1-.042-.658C1.329 6.71 3.27 4.352 5.988 3.783a.727.727 0 0 1 .78.42Z" />
        <path
          opacity={0.4}
          d="M8.578 1.834c3.04.077 5.595 2.263 6.086 5.208l-.004.021-.014.032.002.087a.534.534 0 0 1-.128.314.551.551 0 0 1-.308.181l-.073.01-5.12.332a.611.611 0 0 1-.467-.15.589.589 0 0 1-.192-.359l-.344-5.113a.081.081 0 0 1 0-.053.523.523 0 0 1 .172-.37.544.544 0 0 1 .39-.14Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconGraphNavbarColor;
