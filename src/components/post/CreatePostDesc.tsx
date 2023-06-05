import { SyntheticEvent, useRef, useEffect, useState } from "react";
import resetPasteStyle from "@/utils/resetPasteStyle";

interface PostProps {
  setPost: (data: string) => void;
  showImage: boolean;
}

function CreatePostDesc({ setPost, showImage }: PostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState("");

  const handleFontChange = (value: string) => {
    const exceedLength = showImage || value.length > 84;
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
    setData(newValue);
  };

  return (
    <div
      className={`mt-3 flex  flex-col justify-between ${
        showImage ? "min-h-[4rem]" : "min-h-[10rem]"
      }`}
    >
      <div className="relative">
        <div
          ref={ref}
          className={`relative z-10 w-full flex-auto resize-none bg-transparent  text-[--primary-text] outline-none ${
            showImage ? "text-base" : "text-2xl"
          }`}
          contentEditable={true}
          id="post"
          onInput={handlePostName}
          onPaste={resetPasteStyle}
        ></div>
        {!data && (
          <div
            className={`absolute top-0 z-0  text-[--secondary-text] ${
              showImage ? "text-base" : "text-2xl"
            }`}
          >
            What's on your mind, Prabin?
          </div>
        )}
      </div>
      <div
        className={`mt-4 flex items-center justify-between ${
          showImage && "absolute right-2 top-0"
        }`}
      >
        <img
          className={`h-9 w-9 cursor-pointer ${showImage && "hidden"}`}
          src="/image/color.png"
          alt="select-color"
        />
        <i className="inline-block h-6 w-6 cursor-pointer bg-alternate bg-no-repeat object-cover [background-position-y:-60px]"></i>
      </div>
    </div>
  );
}

export default CreatePostDesc;
