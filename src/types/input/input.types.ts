import { HTMLAttributes, Ref, InputHTMLAttributes } from "react";

export interface OptionData {
  label: string | number;
  value: string | number;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  data?: number[] | string[];
  object?: OptionData[];
  selected?: number | string;
  name: string;
  ref?: Ref<HTMLSelectElement>;
  firstOptionDisabled?: boolean;
}

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ref?: Ref<HTMLInputElement>;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}
