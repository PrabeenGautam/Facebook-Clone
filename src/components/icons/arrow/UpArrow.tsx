import { SVGTypes } from "@/types/svg/svg.types";

function UpArrow(props: SVGTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z" />
    </svg>
  );
}

export default UpArrow;
