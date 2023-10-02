import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconDepartmentsNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.357 2.686a.44.44 0 0 0-.443-.436h-.951c-1.278.002-2.318 1.023-2.318 2.277V5.61c0 .24.198.436.443.436a.44.44 0 0 0 .445-.436V4.527c0-.774.642-1.404 1.43-1.405h.95a.44.44 0 0 0 .444-.436Zm4.67-.436h-.93a.44.44 0 0 0-.443.436c0 .24.199.435.444.435h.929c.791 0 1.435.631 1.435 1.407v1.083c0 .24.2.436.444.436a.44.44 0 0 0 .444-.436V4.528c0-1.256-1.042-2.278-2.323-2.278Zm-4.64 2.183h3.222a1.322 1.322 0 0 1 1.324 1.322v.727a.163.163 0 0 1-.159.156H4.221a.162.162 0 0 1-.158-.156v-.727c-.006-.723.587-1.314 1.324-1.322Z"
        />
        <path d="M12.971 7.524H1.027a.44.44 0 0 0-.445.436c0 .24.2.435.445.435h.618v2.078c0 1.254 1.041 2.275 2.32 2.276h.95a.44.44 0 0 0 .444-.435.44.44 0 0 0-.444-.435h-.95c-.789-.002-1.431-.632-1.431-1.406V8.395h1.53v.578a1.324 1.324 0 0 0 1.324 1.322H8.61a1.324 1.324 0 0 0 1.324-1.322v-.578h1.53v2.076c0 .777-.644 1.408-1.436 1.408H9.1a.44.44 0 0 0-.444.435c0 .24.199.436.444.436h.93c1.28 0 2.323-1.022 2.323-2.279V8.395h.62a.44.44 0 0 0 .443-.435.44.44 0 0 0-.444-.436Z" />
      </g>
    </svg>
  );
};

export default SvgIconDepartmentsNavbarColor;
