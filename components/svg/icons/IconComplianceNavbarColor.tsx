import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconComplianceNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M1.334 7.386c.033 1.559.127 4.225.14 4.519.047.629.288 1.264.663 1.712.521.629 1.163.91 2.058.91 1.238.006 2.602.006 3.926.006 1.33 0 2.621 0 3.711-.007.883 0 1.545-.288 2.06-.91.374-.447.615-1.09.649-1.711.013-.247.08-3.141.12-4.519H1.334Z"
        />
        <path d="M7.497 10.256v.863a.5.5 0 0 0 1 0v-.863a.5.5 0 0 0-1 0" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.808 9.705a.5.5 0 0 1-.551.363c-1.701-.237-3.326-.84-4.698-1.747a.498.498 0 0 1-.225-.417v-2.31c0-1.4 1.141-2.54 2.545-2.54H5.19a1.968 1.968 0 0 1 1.947-1.72h1.721c1 0 1.821.753 1.947 1.72h1.318c1.399 0 2.538 1.14 2.538 2.54v2.31a.502.502 0 0 1-.224.417c-1.375.91-3.007 1.516-4.719 1.753a.5.5 0 0 1-.553-.372A1.203 1.203 0 0 0 7.994 8.8c-.561 0-1.038.363-1.186.905Zm2.05-7.371H7.137a.971.971 0 0 0-.936.72h3.592a.971.971 0 0 0-.935-.72Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconComplianceNavbarColor;
