import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconComplianceNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M1.87 10.818s.094 1.159.116 1.524c.03.49.218 1.037.534 1.417.446.539.972.729 1.673.73.825.002 6.822.002 7.646 0 .701-.001 1.227-.191 1.673-.73.316-.38.505-.927.535-1.417.021-.366.116-1.524.116-1.524"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.664 4.053v-.248c0-.813.659-1.472 1.472-1.472h1.721c.813 0 1.472.66 1.472 1.472l.001.248M7.996 11.618v-.862"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M1.833 6.092v2.312a10.885 10.885 0 0 0 4.492 1.668A1.723 1.723 0 0 1 7.993 8.8c.792 0 1.467.538 1.655 1.278 1.688-.234 3.226-.824 4.512-1.674V6.092c0-1.129-.909-2.038-2.038-2.038H3.878a2.04 2.04 0 0 0-2.045 2.038Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconComplianceNavbar;
