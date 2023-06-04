import { useState } from "react";
import ComponentHolder from "../ComponentHolder";
import Story from "../icons/Story";
import Reels from "./../icons/Reels";
import demo from "@/assets/profile/big.jpg";
import Add from "../icons/Add";

function StorySection() {
  const [select, setSelect] = useState("story");

  return (
    <ComponentHolder>
      <>
        <div className="heading flex">
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
            <span className="flex h-12 items-center justify-center space-x-2">
              <Reels width={20} />
              <span>Reels</span>
            </span>
          </div>
        </div>
        <div className="content mt-4 flex space-x-2">
          <div className="story-section relative h-52 w-28 cursor-pointer overflow-hidden rounded-lg bg-[--nav-bg]">
            <div className="h-[10rem]">
              <img src={demo} alt="me" className="h-full w-full object-cover" />
            </div>
            <div className="relative h-12">
              <span className="story-icon absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[--active]">
                <Add width={20} />
              </span>
              <span className="story-label justify-center">Create Story</span>
            </div>
          </div>

          <div className="story-section story-bg relative h-52 w-28 cursor-pointer overflow-hidden rounded-lg bg-[--nav-bg]">
            <div className="h-full">
              <img src={demo} alt="me" className="h-full w-full object-cover" />
            </div>

            <div className="absolute bottom-0 left-2">
              <span className="story-label text-bold justify-start antialiased">
                Prabin Gautam
              </span>
            </div>

            <div className="absolute left-3 top-3">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img src={demo} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </>
    </ComponentHolder>
  );
}

export default StorySection;
