import { CloseButtonProps } from "@/types/component/close.types";
import { GrFormClose } from "react-icons/gr";

function CloseButton({ className, onClose, ...props }: CloseButtonProps) {
  return (
    <span
      className={`icons h-8 w-8 cursor-pointer ${className}`}
      onClick={onClose}
      {...props}
    >
      <GrFormClose className={`gr-icon h-8 w-8`} />
    </span>
  );
}

export default CloseButton;
