import LeftArrowFull from "@/components/icons/arrow/LeftArrowFull";
import { ModalHeadingProps } from "@/types/modal/modal.types";
import { GrFormClose } from "react-icons/gr";

function ModalHeading({ type, ...props }: ModalHeadingProps) {
  return (
    <div
      className={`header relative flex ${
        type
          ? "h-16 items-center justify-center border-b border-[--divider]"
          : "justify-between border-b-2 p-4"
      }`}
    >
      <div className="heading flex flex-col">
        <span
          className={`primary  font-bold  ${
            type
              ? "text-xl text-[--primary-text]"
              : "text-3xl/[38px] text-[#1c1e21]"
          }`}
        >
          {props.heading}
        </span>
        {props.subheading && (
          <span className={`secondary mt-1 text-[#6067701]`}>
            {props.subheading}
          </span>
        )}
      </div>

      {props.showPrev && (
        <span
          className={`prev ${
            type
              ? "icons absolute left-4 top-1/2 h-9 w-9 -translate-y-1/2  bg-[--secondary-btn-bg]"
              : ""
          } cursor-pointer`}
          onClick={props.onClose}
        >
          <i className="filter-secondary bg-reset h-5 w-5 bg-whole [background-position-x:-52px] [background-position-y:-62px]"></i>
        </span>
      )}

      {props.showClose && (
        <span
          className={`close ${
            type
              ? "icons absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2  bg-[--secondary-btn-bg]"
              : ""
          } cursor-pointer`}
          onClick={props.onClose}
        >
          <GrFormClose className={`h-8 w-8 ${type ? "gr-icon" : ""}`} />
        </span>
      )}
    </div>
  );
}

export default ModalHeading;
