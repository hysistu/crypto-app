import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconLearnNavbar = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        clipRule="evenodd"
        d="m8.736 3.285 1.218 2.434c.12.239.35.404.618.443l2.725.392c.673.097.941.913.454 1.38l-1.97 1.894a.802.802 0 0 0-.237.717l.465 2.674c.115.661-.59 1.166-1.191.853l-2.436-1.263a.832.832 0 0 0-.764 0l-2.436 1.263c-.602.313-1.306-.192-1.19-.853l.464-2.674a.802.802 0 0 0-.236-.717L2.25 7.935c-.488-.468-.22-1.284.453-1.381l2.725-.392a.82.82 0 0 0 .618-.443l1.218-2.434a.826.826 0 0 1 1.472 0Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconLearnNavbar;
