import { createPortal } from "react-dom";
import { GrFormClose } from "react-icons/gr";

import { ModalProps } from "../../types/modal/modal.types";

function ModalContent(props: ModalProps) {
  return (
    <div className="modal fixed inset-0 z-50 flex w-full items-center justify-center bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div
        className={`modal-container custom-shadow mx-6  h-fit animate-fade-up rounded-lg bg-white ${props.contentClassName} `}
      >
        {/* Heading Sections  */}
        <div className="header flex justify-between border-b-2 p-4">
          <div className="heading flex flex-col">
            <span className="primary text-3xl/[38px] font-bold text-[#1c1e21]">
              {props.heading}
            </span>
            {props.subheading && (
              <span className="secondary mt-1 text-[#6067701] ">
                {props.subheading}
              </span>
            )}
          </div>

          {props.showClose && (
            <span className="close cursor-pointer">
              <GrFormClose className="h-8 w-8" />
            </span>
          )}
        </div>

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
}: ModalProps) {
  const modalContainer = document.querySelector("#modal") as HTMLElement;

  return createPortal(
    <ModalContent
      children={children}
      contentClassName={contentClassName}
      heading={heading}
      subheading={subheading}
      showClose={showClose}
    />,
    modalContainer
  );
}

export default Modal;
