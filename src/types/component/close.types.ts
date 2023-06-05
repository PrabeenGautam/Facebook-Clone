import { HTMLAttributes } from "react";

export interface CloseButtonProps extends HTMLAttributes<HTMLSpanElement> {
  onClose: () => void;
}
