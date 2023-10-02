import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconChart = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M14.129 19.553v13.149M23.073 13.262v19.44M31.871 26.502v6.2"
        stroke="#3CC13B"
        strokeWidth={2.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M31.981 3.833H14.019c-6.261 0-10.186 4.432-10.186 10.705v16.924c0 6.273 3.907 10.705 10.186 10.705h17.962c6.28 0 10.186-4.432 10.186-10.705V14.538c0-6.273-3.907-10.705-10.186-10.705Z"
        stroke="#3CC13B"
        strokeWidth={2.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconChart;
