import { ModalHeadingProps } from "@/types/modal/modal.types";
import { GrFormClose } from "react-icons/gr";

function ModalHeading(props: ModalHeadingProps) {
  return (
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
        <span className="close cursor-pointer" onClick={props.onClose}>
          <GrFormClose className="h-8 w-8" />
        </span>
      )}
    </div>
  );
}

export default ModalHeading;
