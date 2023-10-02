import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconMoreCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#262B2B">
        <path
          opacity={0.4}
          d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.521 10.803c-.66 0-1.198.537-1.198 1.196a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197Zm4.48 0c-.662 0-1.199.537-1.199 1.196A1.2 1.2 0 0 0 12 13.197 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197ZM15.28 12a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconMoreCircle;
