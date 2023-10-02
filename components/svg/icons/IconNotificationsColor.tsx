import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconNotificationsColor = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="M28.007 16.497c-1.035-1.208-1.505-2.255-1.505-4.035v-.605c0-2.318-.534-3.812-1.694-5.306-1.788-2.32-4.798-3.718-7.745-3.718h-.125c-2.885 0-5.801 1.334-7.62 3.56-1.224 1.524-1.82 3.082-1.82 5.464v.605c0 1.78-.439 2.827-1.505 4.035-.784.89-1.035 2.035-1.035 3.273 0 1.24.407 2.414 1.224 3.369a6.42 6.42 0 0 0 4.108 2.002c2.227.254 4.453.35 6.71.35 2.258 0 4.484-.16 6.711-.35a6.42 6.42 0 0 0 4.107-2.002c.816-.955 1.224-2.129 1.224-3.369 0-1.238-.25-2.383-1.035-3.273Z"
        fill="#F3BB1C"
      />
      <path
        opacity={0.4}
        d="M19.846 27.24c-.708-.152-5.024-.152-5.732 0-.605.14-1.26.465-1.26 1.178.035.68.434 1.281.986 1.662l-.002.002a5.15 5.15 0 0 0 2.429 1.037c.467.064.943.061 1.428 0a5.15 5.15 0 0 0 2.427-1.038h-.002c.552-.382.95-.982.986-1.663 0-.713-.655-1.039-1.26-1.179Z"
        fill="#F3BB1C"
      />
    </svg>
  );
};

export default SvgIconNotificationsColor;
