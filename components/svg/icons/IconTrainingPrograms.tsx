import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconTrainingPrograms = (props: SVGProps<SVGSVGElement>) => {
  const { className } = props;
  const svgClasses = classNames("wp-icon", className);
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClasses}
    >
      <path
        d="m7.153 14.28-1.471 2.474-1.48 2.644c-.077.135-.115.203-.096.251a.107.107 0 0 0 .026.04c.037.034.11.02.257-.01l2.686-.537c.06-.012.091-.018.118-.007a.098.098 0 0 1 .024.014c.022.018.034.05.057.112l.965 2.601c.05.139.076.208.121.224a.093.093 0 0 0 .043.004c.046-.006.08-.068.149-.194l1.307-2.393.84-1.5.421-.752.507-1.037M12.195 16.492l1.621 2.896 1.31 2.435c.07.13.104.195.154.207a.113.113 0 0 0 .047.002c.05-.01.079-.072.139-.198l1.114-2.35c.024-.052.036-.077.058-.09a.101.101 0 0 1 .024-.011c.026-.008.057-.002.118.01l2.706.54c.14.029.21.043.247.015a.086.086 0 0 0 .026-.032c.02-.04-.014-.1-.08-.219l-1.202-2.177-.746-1.388-.373-.694-.56-.901"
        stroke="#F9D776"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M12.057 5.927a.15.15 0 0 1 .284 0l.744 2.234a.15.15 0 0 0 .143.103h2.4a.15.15 0 0 1 .086.272l-1.935 1.372a.15.15 0 0 0-.055.17l.74 2.223a.15.15 0 0 1-.229.17l-1.95-1.382a.15.15 0 0 0-.173 0l-1.949 1.382a.15.15 0 0 1-.229-.17l.74-2.223a.15.15 0 0 0-.055-.17L8.684 8.536a.15.15 0 0 1 .087-.272h2.4a.15.15 0 0 0 .142-.103l.744-2.234Z"
        stroke="#F9D776"
        strokeWidth={1.5}
      />
      <ellipse
        cx={12.199}
        cy={9.5}
        rx={7.174}
        ry={7}
        stroke="#F3BB1C"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default SvgIconTrainingPrograms;
