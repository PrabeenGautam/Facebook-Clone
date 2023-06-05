import { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "../../../types/modal/modal.types";
import ModalHeading from "./ModalHeading";

function ModalContent({ onClose, ...props }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal fixed inset-0 z-50 flex w-full items-center justify-center bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div
        className={`modal-container custom-shadow mx-6  h-fit animate-fade-up rounded-lg bg-white ${props.contentClassName} `}
      >
        {/* Heading Sections  */}
        <ModalHeading
          heading={props.heading}
          subheading={props.subheading}
          showClose={props.showClose}
          onClose={onClose}
        />

        {/* Content Section  */}
        <div className="content p-4">{props.children}</div>
      </div>
    </div>
  );
}

function Modal({
  children,
  contentClassName = "w-full max-w-xl",
  heading,
  subheading = "",
  showClose = true,
  onClose,
}: ModalProps) {
  const modalContainer = document.querySelector("#modal") as HTMLElement;

  return createPortal(
    <ModalContent
      children={children}
      contentClassName={contentClassName}
      heading={heading}
      subheading={subheading}
      showClose={showClose}
      onClose={onClose}
    />,
    modalContainer
  );
}

export default Modal;
