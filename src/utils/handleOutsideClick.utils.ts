import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

type HandleOutsideProps = {
  (
    event: MouseEvent,
    ref: RefObject<HTMLElement>,
    setFocus: Dispatch<SetStateAction<boolean>>
  ): void;
};

const handleOutsideClick: HandleOutsideProps = (event, ref, setFocus) => {
  if (ref.current && !ref.current.contains(event.target as Node)) {
    setFocus(false);
  }
};

export default handleOutsideClick;
