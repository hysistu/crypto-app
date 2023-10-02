import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconClosedIncidents = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <rect y={4} width={3} height={4} rx={1} fill="#C5ECC4" />
      <rect x={4} width={3} height={8} rx={1} fill="#C5ECC4" />
      <rect x={8} y={3} width={3} height={5} rx={1} fill="#C5ECC4" />
    </svg>
  );
};

export default SvgIconClosedIncidents;
