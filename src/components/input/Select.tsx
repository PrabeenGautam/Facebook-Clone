import { HTMLAttributes } from "react";
import generateValue from "../../utils/generateValue";

interface Props extends HTMLAttributes<HTMLElement> {
  data?: string[] | number[];
  selected?: number | string;
  name: string;
}

function Select(props: Props) {
  let dataArray = props.data;

  return (
    <select
      name={props.name}
      id={props.id}
      title={props.title}
      defaultValue={props.defaultValue}
      className={`flex h-8 cursor-pointer items-center rounded-[4px] border border-gray-400 bg-white pl-1.5 ${props.className} `}
    >
      {dataArray &&
        dataArray.map((value, index) => {
          return (
            <option
              key={`${props.id}-${index}`}
              value={props.id === "month" ? index + 1 : value}
            >
              {value}
            </option>
          );
        })}
    </select>
  );
}

export default Select;
