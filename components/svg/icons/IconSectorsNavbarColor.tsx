import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconSectorsNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.688 2.458a4.593 4.593 0 0 1 4.69.038 4.887 4.887 0 0 1 2.29 4.178c-.034 1.694-.965 3.286-2.129 4.516a12.488 12.488 0 0 1-2.24 1.88.781.781 0 0 1-.27.096.546.546 0 0 1-.261-.079 12.343 12.343 0 0 1-3.226-3.031 6.186 6.186 0 0 1-1.208-3.467 4.77 4.77 0 0 1 2.354-4.131Zm.842 4.838c.245.604.824.998 1.465.998a1.56 1.56 0 0 0 1.122-.467c.298-.302.465-.713.463-1.142a1.615 1.615 0 0 0-.974-1.495 1.564 1.564 0 0 0-1.73.346 1.637 1.637 0 0 0-.346 1.76Z"
        />
        <ellipse opacity={0.4} cx={8} cy={14.5} rx={3.333} ry={0.667} />
      </g>
    </svg>
  );
};

export default SvgIconSectorsNavbarColor;
