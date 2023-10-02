import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconRiskNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
          d="M11.257 3.41H9.295a1.62 1.62 0 0 1-1.263-.592l-.646-.893c-.304-.38-.768-.6-1.257-.592H4.742c-2.49 0-3.408 1.461-3.408 3.946v2.686c-.003.295 13.33.295 13.331 0v-.781c.012-2.485-.883-3.774-3.408-3.774Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.889 4.362c.213.25.378.536.486.846a5.7 5.7 0 0 1 .29 1.975v3.502c0 .295-.022.59-.065.882a3.994 3.994 0 0 1-.533 1.455 2.96 2.96 0 0 1-.45.592 4 4 0 0 1-2.911 1.047H5.288a4.018 4.018 0 0 1-2.917-1.047 2.96 2.96 0 0 1-.444-.592 3.887 3.887 0 0 1-.522-1.455 5.467 5.467 0 0 1-.071-.882V7.183c0-.292.016-.584.047-.875.007-.051.017-.101.027-.15.016-.084.033-.165.033-.246.06-.351.17-.692.326-1.012.462-.988 1.41-1.49 2.964-1.49h6.52a3.478 3.478 0 0 1 2.418.733c.08.067.153.14.22.219ZM4.648 10.36H11.37a.552.552 0 0 0 .575-.532.497.497 0 0 0-.119-.355.522.522 0 0 0-.415-.213H4.648a.55.55 0 1 0 0 1.1Z"
        />
      </g>
    </svg>
  );
};

export default SvgIconRiskNavbarColor;
