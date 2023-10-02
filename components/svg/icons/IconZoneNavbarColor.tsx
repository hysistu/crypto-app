import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconZoneNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M12.835 7.5a5.833 5.833 0 1 1-11.667 0 5.833 5.833 0 0 1 11.667 0Z"
        />
        <path d="M9.254 5.578 8.31 8.565a.38.38 0 0 1-.256.257l-2.975.933a.261.261 0 0 1-.327-.327l.933-2.993a.39.39 0 0 1 .257-.256l2.987-.934a.262.262 0 0 1 .326.333Z" />
      </g>
    </svg>
  );
};

export default SvgIconZoneNavbarColor;
