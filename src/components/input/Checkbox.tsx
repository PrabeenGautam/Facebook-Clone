import { forwardRef } from "react";

import { CheckBoxProps } from "../../types/input/input.types";

const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  return (
    <span
      className={` relative flex h-8 cursor-pointer items-center rounded-[4px] border border-gray-300 bg-white ${props.className} `}
    >
      <label
        className="color-[#1c1e21] w-full cursor-pointer pl-2.5 capitalize"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        ref={ref}
        type="radio"
        className="absolute right-2.5 top-0 h-full cursor-pointer"
        name={props.name}
        value={props.value}
        id={props.label}
        onChange={props.onChange}
      />
    </span>
  );
});

export default Checkbox;
