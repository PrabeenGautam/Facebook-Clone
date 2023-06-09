import { SVGTypes } from "@/types/svg/svg.types";

function Menu(props: SVGTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 44 44"
      {...props}
    >
      <circle cx="7" cy="7" r="6" />
      <circle cx="22" cy="7" r="6" />
      <circle cx="37" cy="7" r="6" />
      <circle cx="7" cy="22" r="6" />
      <circle cx="22" cy="22" r="6" />
      <circle cx="37" cy="22" r="6" />
      <circle cx="7" cy="37" r="6" />
      <circle cx="22" cy="37" r="6" />
      <circle cx="37" cy="37" r="6" />
    </svg>
  );
}

export default Menu;
