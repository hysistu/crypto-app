import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconEye = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M9.476 7.533a1.976 1.976 0 1 1-3.952 0 1.976 1.976 0 0 1 3.952 0Z"
        stroke="#262B2B"
        strokeWidth={0.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M7.499 12.096c2.38 0 4.557-1.711 5.782-4.564C12.056 4.68 9.88 2.97 7.5 2.97H7.5c-2.38 0-4.557 1.711-5.782 4.563 1.225 2.853 3.402 4.564 5.782 4.564H7.5Z"
        stroke="#262B2B"
        strokeWidth={0.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconEye;
