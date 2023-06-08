import { ReactNode } from "react";

export interface ModalHeadingProps {
  heading: string;
  subheading?: string;
  showClose?: boolean;
  showPrev?: boolean;
  type?: boolean;
  onClose: () => void;
}

export interface ModalProps extends ModalHeadingProps {
  children: ReactNode;
  contentClassName?: string;
}
