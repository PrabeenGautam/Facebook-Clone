import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  contentClassName?: string;
  heading: string;
  subheading?: string;
  showClose?: boolean;

  onClose: () => void;
}
