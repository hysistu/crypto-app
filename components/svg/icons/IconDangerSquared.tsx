import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDangerSquared = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M15.986 21.061V15.17M15.986 10.94h.013"
        stroke="#F03738"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M21.78 3.667H10.22c-4.027 0-6.553 2.852-6.553 6.888v10.89c0 4.037 2.514 6.889 6.554 6.889h11.557c4.041 0 6.556-2.852 6.556-6.888V10.555c0-4.036-2.515-6.888-6.555-6.888Z"
        stroke="#F03738"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDangerSquared;
