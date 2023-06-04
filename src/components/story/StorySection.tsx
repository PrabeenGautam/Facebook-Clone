import { useState, useRef, RefObject } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import ComponentHolder from "../ComponentHolder";
import Story from "../icons/Story";
import Reels from "../icons/Reels";
import demo from "@/assets/profile/big.jpg";
import Add from "../icons/Add";
import StoryOuterContainer from "./StoryOuterContainer";
import storyData from "@/assets/data/story.data";
import LeftArrow from "../icons/arrow/LeftArrow";
import RightArrow from "../icons/arrow/RightArrow";

function StorySection() {
  const [select, setSelect] = useState("story");
  const swiperRef = useRef<SwiperRef>(null);

  const prevBtnRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLDivElement>(null);

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
        <div className="content relative mt-4">
          <div
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="icons absolute left-4 top-1/2 z-10 w-12 -translate-y-1/2 select-none"
            ref={prevBtnRef}
          >
            <LeftArrow width={20} />
          </div>
          <div
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="icons absolute right-4 top-1/2 z-10 w-12 -translate-y-1/2 select-none"
            ref={nextBtnRef}
          >
            <RightArrow width={20} />
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={"auto"}
            spaceBetween={7.5}
            onSwiper={(swiper) => {
              swiper.isBeginning === true &&
                prevBtnRef.current?.classList.add("deactivate");
            }}
            onSlideChange={(swiper) => {
              const { isBeginning, isEnd } = swiper;
              prevBtnRef.current?.classList.toggle("deactivate", isBeginning);
              nextBtnRef.current?.classList.toggle("deactivate", isEnd);
            }}
            onReachBeginning={() => {
              prevBtnRef.current?.classList.add("deactivate");
            }}
            onReachEnd={() => {
              nextBtnRef.current?.classList.add("deactivate");
            }}
          >
            <SwiperSlide className="h-52 !w-28">
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
                  <span className="story-label justify-center">
                    Create Story
                  </span>
                </div>
              </div>
            </SwiperSlide>
            {storyData.map((story) => {
              return (
                <SwiperSlide key={story._id} className="h-52 !w-28">
                  <StoryOuterContainer
                    _id={story._id}
                    fullname={story.fullname}
                    profileImage={story.profileImage}
                    story={story.story}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    </ComponentHolder>
  );
}

export default StorySection;
