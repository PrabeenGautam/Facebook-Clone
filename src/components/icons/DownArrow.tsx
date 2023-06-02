import { SVGTypes } from "@/types/svg/svg.types";

function DownArrow(props: SVGTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fillRule="evenodd" transform="translate(-448 -544)">
        <path
          fillRule="nonzero"
          d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
        />
      </g>
    </svg>
  );
}

export default DownArrow;
