import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconRiskNavbar = (props: SVGProps<SVGSVGElement>) => {
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
      <g stroke="#262B2B" strokeLinecap="round" strokeLinejoin="round">
        <path
          clipRule="evenodd"
          d="M14.63 11.005c0 2.385-1.406 3.791-3.791 3.791H5.648c-2.392 0-3.797-1.405-3.797-3.79V5.807c0-2.385.876-3.79 3.261-3.79h1.333c.479 0 .93.225 1.217.608l.609.809c.288.382.738.608 1.217.608h1.886c2.392 0 3.274 1.218 3.274 3.652l-.018 3.31Z"
        />
        <path opacity={0.4} d="M5.04 10.16h6.395" />
      </g>
    </svg>
  );
};

export default SvgIconRiskNavbar;
