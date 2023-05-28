import { createPortal } from "react-dom";
import { GrFormClose } from "react-icons/gr";

import { ModalProps } from "./../../types/modal/modal";

function ModalContent({
  children,
  contentClassName = "w-full max-w-xl",
}: ModalProps) {
  return (
    <div className="modal fixed inset-0 z-50 flex w-full justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
      <div
        className={`modal-container mx-6 mt-44 h-fit animate-fade-up bg-white shadow-md ${contentClassName}`}
      >
        <div className="header">
          <div className="heading">
            <span className="primary"></span>
            <span className="secondary"></span>
          </div>

          <span className="close">
            <GrFormClose />
          </span>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

function Modal({ children, contentClassName = "w-full max-w-xl" }: ModalProps) {
  const modalContainer = document.querySelector("#modal") as HTMLElement;

  return createPortal(
    <ModalContent children={children} contentClassName={contentClassName} />,
    modalContainer
  );
}

export default Modal;
