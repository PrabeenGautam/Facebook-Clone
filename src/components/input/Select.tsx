import { forwardRef } from "react";
import { SelectProps } from "../../types/input/input.types";

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  let dataArray = props.data;

  const hasObject = props.object?.every(
    (element) => typeof element === "object"
  );

  return (
    <select
      ref={ref}
      name={props.name}
      id={props.id}
      title={props.title}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      className={`flex h-8 w-full cursor-pointer items-center rounded-[4px] border border-gray-300 bg-white pl-1.5 ${props.className} `}
    >
      {!hasObject &&
        dataArray?.map((value, index) => {
          return (
            <option
              key={`${props.id}-${index}`}
              value={props.id === "month" ? index + 1 : value}
            >
              {value}
            </option>
          );
        })}

      {hasObject &&
        props.object?.map((list, index) => {
          return (
            <option
              disabled={index === 0 && props.firstOptionDisabled}
              key={`${props.id}-${index}`}
              value={props.id === "month" ? index + 1 : list.value}
            >
              {list.label}
            </option>
          );
        })}
    </select>
  );
});

export default Select;
