import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconLogout = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        opacity={0.4}
        d="M0 4.447C0 1.996 2.03 0 4.525 0h4.96C11.976 0 14 1.99 14 4.437v11.116C14 18.005 11.97 20 9.474 20H4.515C2.025 20 0 18.01 0 15.563V4.447Z"
        fill="#868B9F"
      />
      <path
        d="m19.779 9.455-2.846-2.909a.736.736 0 0 0-1.06.002.785.785 0 0 0 .001 1.089l1.56 1.593H7.548a.76.76 0 0 0-.75.77c0 .426.335.77.75.77h9.884l-1.559 1.593a.785.785 0 0 0-.002 1.089.74.74 0 0 0 .532.227.74.74 0 0 0 .529-.225l2.846-2.908a.783.783 0 0 0 0-1.091Z"
        fill="#868B9F"
      />
    </svg>
  );
};

export default SvgIconLogout;
