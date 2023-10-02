import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconOverview = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        clipRule="evenodd"
        d="M28.86 5.409H15.83c-4.032 0-7.508 3.268-7.508 7.302v20.98c0 4.261 3.25 7.659 7.509 7.659h15.645c4.034 0 7.302-3.623 7.302-7.659v-17.95L28.86 5.409Z"
        stroke="#3E66FB"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.345 5.386v5.697c0 2.78 2.25 5.036 5.029 5.042 2.58.006 5.217.008 5.395-.004"
        stroke="#3E66FB"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M27.973 30.467h-10.57M23.975 20.77h-6.572"
        stroke="#3E66FB"
        strokeWidth={2.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgIconOverview;
