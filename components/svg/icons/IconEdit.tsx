import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconEdit = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M13.7 19.898h6.376"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12.855 4.956c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L9.359 19.29a1.48 1.48 0 0 1-1.15.568l-3.196.04-.724-3.114c-.102-.437 0-.897.277-1.252l8.289-10.575Z"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="m11.303 6.936 4.794 3.758"
        stroke="#3E66FB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconEdit;
