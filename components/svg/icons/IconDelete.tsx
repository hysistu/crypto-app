import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDelete = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M12.883 6.313s-.362 4.49-.572 6.38c-.1.904-.658 1.434-1.572 1.45-1.74.031-3.48.034-5.22-.003-.879-.018-1.427-.554-1.525-1.442-.212-1.908-.572-6.386-.572-6.386"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.805 4.16H2.5M11.627 4.16c-.523 0-.974-.37-1.077-.883l-.162-.81a.853.853 0 0 0-.824-.633H6.742a.853.853 0 0 0-.825.633l-.162.81a1.099 1.099 0 0 1-1.077.883"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconDelete;
