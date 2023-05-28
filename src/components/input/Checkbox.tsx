import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  label: string;
  name: string;
  value: number;
}

function Checkbox(props: Props) {
  return (
    <span
      className={`relative flex h-8 items-center rounded-[4px] border border-gray-400 bg-white ${props.className}`}
    >
      <label
        className="color-[#1c1e21] w-full pl-2.5 capitalize"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        type="radio"
        className="absolute right-2.5 top-0 h-full"
        name={props.name}
        value={props.value}
        id={props.label}
      />
    </span>
  );
}

export default Checkbox;
