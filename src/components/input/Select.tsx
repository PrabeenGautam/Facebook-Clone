import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  data?: number[] | string[];
  object?: { label: string | number; value: string | number }[];
  selected?: number | string;
  name: string;
}

function Select(props: Props) {
  let dataArray = props.data;

  const hasObject = props.object?.every(
    (element) => typeof element === "object"
  );

  return (
    <select
      name={props.name}
      id={props.id}
      title={props.title}
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
              key={`${props.id}-${index}`}
              value={props.id === "month" ? index + 1 : list.value}
            >
              {list.label}
            </option>
          );
        })}
    </select>
  );
}

export default Select;
