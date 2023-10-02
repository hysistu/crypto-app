import * as React from "react";
import { SVGProps } from "react";
import classNames from "classnames";

const SvgIconLearnNavbarColor = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        opacity={0.4}
        d="m8.65 2.076 1.485 2.982a.74.74 0 0 0 .559.4l3.334.486c.194.027.371.13.49.286.118.155.17.351.14.544a.741.741 0 0 1-.213.422l-2.416 2.341a.704.704 0 0 0-.214.643l.594 3.292a.743.743 0 0 1-.594.848.779.779 0 0 1-.476-.076l-2.975-1.55a.78.78 0 0 0-.702 0l-2.974 1.55a.762.762 0 0 1-1.021-.298.754.754 0 0 1-.078-.467l.595-3.293a.707.707 0 0 0-.214-.643l-2.416-2.34a.723.723 0 0 1-.019-1.022l.02-.02a.718.718 0 0 1 .427-.21l3.334-.486a.743.743 0 0 0 .56-.4l1.43-2.99a.738.738 0 0 1 .678-.408h.09c.248.03.465.184.577.409"
        fill="#fff"
      />
      <path
        d="M7.994 12.611a.818.818 0 0 0-.368.101l-2.96 1.546a.772.772 0 0 1-.998-.308.737.737 0 0 1-.077-.462l.591-3.286a.735.735 0 0 0-.213-.65l-2.417-2.34a.729.729 0 0 1-.012-1.03l.012-.01a.756.756 0 0 1 .421-.212l3.337-.49a.722.722 0 0 0 .558-.4l1.45-3.028A.737.737 0 0 1 8 1.668c-.006.198-.006 10.809-.006 10.943"
        fill="#fff"
      />
    </svg>
  );
};

export default SvgIconLearnNavbarColor;
