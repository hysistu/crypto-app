import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconProfileBw = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        clipRule="evenodd"
        d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.564 4.596h.032Z"
        stroke="#262B2B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconProfileBw;
