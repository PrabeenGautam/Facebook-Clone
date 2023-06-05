import { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "../../../types/modal/modal.types";
import ModalHeading from "./ModalHeading";

function ModalContent({ onClose, type = true, ...props }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className={`modal fixed inset-0 z-50 flex w-full items-center justify-center  ${
        type
          ? "bg-[--dark-overlay]"
          : "bg-[rgba(255,255,255,0.2)] backdrop-blur-sm"
      }`}
    >
      <div
        className={`modal-container custom-shadow mx-6  h-fit animate-fade-up rounded-lg ${
          type ? "bg-[--nav-bg]" : "bg-white"
        } ${props.contentClassName} w-full`}
      >
        {/* Heading Sections  */}
        <ModalHeading
          heading={props.heading}
          subheading={props.subheading}
          showClose={props.showClose}
          onClose={onClose}
          type={type}
        />

        {/* Content Section  */}
        <div className={`content p-4 ${type ? "text-[--primary-text]" : ""}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Modal({
  contentClassName = "w-full max-w-xl",
  subheading = "",
  showClose = true,
  ...props
}: ModalProps) {
  const modalContainer = document.querySelector("#modal") as HTMLElement;

  return createPortal(
    <ModalContent
      contentClassName={contentClassName}
      subheading={subheading}
      showClose={showClose}
      {...props}
    />,
    modalContainer
  );
}

export default Modal;
