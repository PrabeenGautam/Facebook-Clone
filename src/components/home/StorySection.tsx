import { useState } from "react";
import ComponentHolder from "../ComponentHolder";
import Story from "../icons/Story";
import Reels from "./../icons/Reels";

function StorySection() {
  const [select, setSelect] = useState("story");

  return (
    <ComponentHolder>
      <div>
        <div className="flex">
          <div
            onClick={() => setSelect("story")}
            className={`${
              select === "story"
                ? "el-active"
                : "rounded-lg hover:bg-[--comment-hover] "
            } w-full cursor-pointer`}
          >
            <span className="flex h-12 items-center justify-center space-x-2">
              <Story width={20} />
              <span>Stories</span>
            </span>
          </div>

          <div
            onClick={() => setSelect("reels")}
            className={`${
              select === "reels"
                ? "el-active"
                : "rounded-lg hover:bg-[--comment-hover]"
            } w-full cursor-pointer`}
          >
            <span className="flex h-12 items-center justify-center space-x-2 p-3 text-[--secondary-text]">
              <Reels width={20} />
              <span>Reels</span>
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </ComponentHolder>
  );
}

export default StorySection;
