import {
  useRef,
  useState,
  useEffect,
  SyntheticEvent,
  ClipboardEvent,
} from "react";
import { Link } from "react-router-dom";
import Modal from "./core/Modal";
import demo from "@/assets/profile/small.jpg";
import resetPasteStyle from "@/utils/resetPasteStyle";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  const [post, setPost] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const handleFontChange = (value: string) => {
    const exceedLength = value.length > 84;
    ref.current?.classList.toggle("text-base", exceedLength);
    ref.current?.classList.toggle("text-2xl", !exceedLength);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      handleFontChange(ref.current.innerText);
    }
  }, []);

  const handlePostName = (event: SyntheticEvent<HTMLDivElement>) => {
    const newValue = event.currentTarget.innerText;
    handleFontChange(newValue);
    setPost(newValue);
  };

  return (
    <Modal heading="Create post" onClose={onClose} contentClassName="max-w-lg">
      <div>
        <div className="flex items-center space-x-3 rounded-lg">
          <Link to={"/"}>
            <img src={demo} className="h-12 w-12 rounded-full" alt="alt" />
          </Link>
          <div>
            <span className="sidebar-label">Prabin Gautam</span>
            <div className="mt-1 flex w-fit items-center space-x-1 rounded-md bg-[--secondary-btn-bg] px-2 py-1">
              <img
                className="filter-primary h-3 w-3"
                src="/image/lock.png"
                alt="lock"
              />
              <span className="text-[13px] font-semibold leading-4">
                Only Me
              </span>
              <i className="filter-primary inline-block h-3 w-3 bg-whole bg-no-repeat [background-position-x:-124px] [background-position-y:-150px]"></i>
            </div>
          </div>
        </div>

        <div className="mt-4 flex min-h-[10rem] flex-col justify-between">
          <div className="relative">
            <div
              ref={ref}
              className="child-scroll relative z-10 max-h-[16rem] w-full flex-auto resize-none bg-transparent text-2xl text-[--primary-text] outline-none "
              contentEditable={true}
              id="post"
              onInput={handlePostName}
              onPaste={resetPasteStyle}
            ></div>
            {!post && (
              <div className="absolute top-0 z-0 text-2xl text-[--secondary-text]">
                What's on your mind, Prabin?
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <img
              className="h-9 w-9 cursor-pointer"
              src="/image/color.png"
              alt="select-color"
            />
            <i className="inline-block h-6 w-6 cursor-pointer bg-alternate bg-no-repeat object-cover [background-position-y:-60px]"></i>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePostModal;
