import { SVGTypes } from "@/types/svg/svg.types";

function Hamburger(props: SVGTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="currentColor"
      {...props}
    >
      <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z" />
    </svg>
  );
}

export default Hamburger;
