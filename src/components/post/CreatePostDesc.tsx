import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import { ChangeEvent, useRef, useEffect, useState } from "react";

interface PostProps {
  setPost: (name: string, value: string) => void;
  showImage: boolean;
  post: string;
}

function CreatePostDesc({ setPost, showImage, post }: PostProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [data, setData] = useState(post);

  const handleFontChange = (value: string) => {
    const exceedLength = showImage || value.length > 84;
    ref.current?.classList.toggle("text-base", exceedLength);
    ref.current?.classList.toggle("text-2xl", !exceedLength);
  };

  useAutosizeTextArea(ref.current, data);

  useEffect(() => {
    if (ref.current) {
      handleFontChange(ref.current.value);
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  }, []);

  const handlePostName = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    handleFontChange(newValue);
    setPost("post", newValue);
    setData(newValue);
  };

  return (
    <div
      className={`mt-3 flex  flex-col justify-between ${
        showImage ? "min-h-[4rem]" : "min-h-[10rem]"
      }`}
    >
      <div className="relative">
        <textarea
          defaultValue={data}
          ref={ref}
          className={`relative z-10 w-full flex-auto resize-none bg-transparent  text-[--primary-text] outline-none ${
            showImage ? "text-base" : "text-2xl"
          }`}
          id="post"
          onChange={handlePostName}
        ></textarea>
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
