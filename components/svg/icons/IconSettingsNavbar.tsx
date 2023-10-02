import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconSettingsNavbar = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.873 5.582-.415-.72a1.275 1.275 0 0 0-1.74-.47v0a1.27 1.27 0 0 1-1.738-.451 1.22 1.22 0 0 1-.171-.61v0a1.275 1.275 0 0 0-1.276-1.312h-.836a1.27 1.27 0 0 0-1.269 1.275v0A1.275 1.275 0 0 1 5.153 4.55a1.22 1.22 0 0 1-.61-.17v0a1.275 1.275 0 0 0-1.74.469l-.445.732a1.275 1.275 0 0 0 .464 1.74v0a1.275 1.275 0 0 1 0 2.208v0a1.27 1.27 0 0 0-.464 1.733v0l.421.727a1.275 1.275 0 0 0 1.74.494v0a1.263 1.263 0 0 1 1.732.464c.11.184.169.395.171.61v0c0 .704.571 1.275 1.275 1.275h.836c.702 0 1.272-.567 1.276-1.27v0a1.27 1.27 0 0 1 1.275-1.274 1.3 1.3 0 0 1 .61.17v0c.609.351 1.386.144 1.74-.463v0l.439-.733a1.27 1.27 0 0 0-.464-1.739v0a1.27 1.27 0 0 1 0-2.203v0c.604-.353.81-1.125.464-1.733v0-.006Z"
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        opacity={0.4}
        cx={8.117}
        cy={8.426}
        r={1.757}
        stroke="#262B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconSettingsNavbar;
