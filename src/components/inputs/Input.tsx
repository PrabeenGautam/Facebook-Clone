import { InputProps } from "../../types/input/input.types";

function Input({ inputClassName, className, ...props }: InputProps) {
  return (
    <div className={`form-input ${className}`}>
      <input
        className={`w-full rounded-md border  border-gray-300 bg-gray-100 text-base placeholder-gray-500 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none ${inputClassName}`}
        {...props}
      />
    </div>
  );
}

export default Input;
