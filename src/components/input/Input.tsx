import { InputProps } from "../../types/input/input.types";

function Input({ type = "text", ...props }: InputProps) {
  return (
    <div className={`form-input ${props.className}`}>
      <input
        className={`w-full rounded-md border  border-gray-300 bg-gray-100 text-base placeholder-gray-500 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none ${props.inputClassName}`}
        type={type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
