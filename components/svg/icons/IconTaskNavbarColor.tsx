import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconTaskNavbarColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <g fill="#fff">
        <path
          opacity={0.4}
          d="M12.395 7.861a.866.866 0 0 1-.868-.86c0-.476.39-.862.868-.862a.432.432 0 0 0 .438-.434v-1.56c0-1.321-1.085-2.395-2.418-2.395H3.583c-1.332 0-2.416 1.074-2.416 2.394l-.001 1.612a.432.432 0 0 0 .438.434c.495 0 .868.348.868.81 0 .475-.39.861-.868.861a.436.436 0 0 0-.438.434v1.56c0 1.32 1.084 2.395 2.417 2.395h6.833c1.333 0 2.417-1.075 2.417-2.395v-1.56a.436.436 0 0 0-.438-.434"
        />
        <path d="m9 6.76-.687.67.163.946a.427.427 0 0 1-.173.423.426.426 0 0 1-.455.032L7 8.385l-.85.446a.43.43 0 0 1-.625-.455l.162-.946-.688-.67a.43.43 0 0 1 .24-.736l.95-.138.425-.862a.43.43 0 0 1 .386-.24h.002a.43.43 0 0 1 .386.24l.425.862.95.138a.427.427 0 0 1 .348.293.426.426 0 0 1-.11.443" />
      </g>
    </svg>
  );
};

export default SvgIconTaskNavbarColor;
