import HomeLeftSidebar from "@/components/sidebar/home/HomeLeftSidebar";
import HomeRightSidebar from "@/components/sidebar/home/HomeRightSidebar";
import { SidebarHandlerProps } from "@/types/sidebar/sidebar.types";

function Home({ show }: SidebarHandlerProps) {
  return (
    <div className="content-container flex">
      <div
        className={`home-left-sb child-scroll fixed z-50 ${
          show ? "" : "hidden"
        } hide-scrollbar w-full min-w-[17.5rem] flex-auto bg-[--body] xl:sticky xl:block xl:max-w-[17.5rem] xl:pt-4 xll:max-w-[22.5rem]`}
      >
        <HomeLeftSidebar />
      </div>
      <div className="main-content flex flex-auto justify-center ">
        <div className="w-full max-w-[36.875rem] px-8">
          This is the main section.
        </div>
      </div>
      <div className="hidden min-w-[17.5rem] max-w-[17.5rem] flex-auto md:block xll:max-w-[22.5rem]">
        <HomeRightSidebar />
      </div>
    </div>
  );
}

export default Home;
