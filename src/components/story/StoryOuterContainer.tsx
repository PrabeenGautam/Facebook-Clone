import { StoryOuter } from "@/types/component/story.types";

function StoryOuterContainer(props: StoryOuter) {
  return (
    <div className="story-section story-bg relative h-52 w-28 cursor-pointer overflow-hidden rounded-lg bg-[--nav-bg]">
      <img
        src={props.story}
        alt="me"
        className="story-img h-full w-full object-cover"
      />

      <div className="story-overlay"></div>

      <div className="absolute bottom-1 left-2">
        <span className="story-label text-bold justify-start antialiased">
          {props.fullname}
        </span>
      </div>

      <div className="absolute left-2 top-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={props.profileImage}
            alt="me"
            className="rounded-full border-4 border-[--active]"
          />
        </div>
      </div>
    </div>
  );
}

export default StoryOuterContainer;
