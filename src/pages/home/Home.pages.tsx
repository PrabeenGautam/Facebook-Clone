import HomeLeftSidebar from "@/components/sidebar/home/HomeLeftSidebar";
import HomeRightSidebar from "@/components/sidebar/home/HomeRightSidebar";
import { SidebarHandlerProps } from "@/types/sidebar/sidebar.types";
import StorySection from "@/components/story/StorySection";
import PostCreateContainer from "@/components/post/PostCreateContainer";

function Home({ show }: SidebarHandlerProps) {
  return (
    <div className="content-container flex">
      <div
        className={`child-scroll home-sb fixed z-50 ${
          show ? "" : "hidden"
        } hide-scrollbar w-full min-w-[17.5rem] flex-auto bg-[--body] xl:sticky xl:block xl:max-w-[17.5rem] xl:py-1 xll:max-w-[22.5rem]`}
      >
        <HomeLeftSidebar />
      </div>
      <div className="main-content flex flex-auto justify-center ">
        <div className="mx-4 mt-6 w-full max-w-[36.875rem] space-y-4">
          <StorySection />
          <PostCreateContainer />
        </div>
      </div>
      <div className="child-scroll home-sb toggle-scrollbar sticky hidden min-w-[17.5rem] max-w-[17.5rem] flex-auto overflow-y-auto py-1 md:block xll:max-w-[22.5rem]">
        <HomeRightSidebar />
      </div>
    </div>
  );
}

export default Home;
