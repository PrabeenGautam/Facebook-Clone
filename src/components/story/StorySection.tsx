import { useState } from "react";
import ComponentHolder from "../ComponentHolder";
import Story from "../icons/Story";
import Reels from "../icons/Reels";
import demo from "@/assets/profile/big.jpg";
import Add from "../icons/Add";
import StoryOuterContainer from "./StoryOuterContainer";
import storyData from "@/assets/data/story.data";

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
          <div className="story-section group relative h-52 w-28 cursor-pointer overflow-hidden rounded-lg bg-[--nav-bg]">
            <div className="h-[10rem] overflow-hidden">
              <img
                src={demo}
                alt="me"
                className="story-img h-full w-full object-cover"
              />
            </div>
            <div className="story-create story-overlay"></div>
            <div className="relative h-12">
              <span className="story-icon absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[--active]">
                <Add width={20} />
              </span>
              <span className="story-label justify-center">Create Story</span>
            </div>
          </div>
          {storyData.map((story) => {
            return (
              <StoryOuterContainer
                key={story._id}
                _id={story._id}
                fullname={story.fullname}
                profileImage={story.profileImage}
                story={story.story}
              />
            );
          })}
        </div>
      </>
    </ComponentHolder>
  );
}

export default StorySection;
