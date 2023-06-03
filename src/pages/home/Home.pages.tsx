import HomeLeftSidebar from "@/components/sidebar/home/HomeLeftSidebar";
import HomeRightSidebar from "@/components/sidebar/home/HomeRightSidebar";

function Home() {
  return (
    <div className="content-container flex">
      <div className="child-scroll sticky top-0 h-[calc(100vh-var(--h-header))] min-w-[17.5rem] max-w-[22.5rem] flex-auto pt-4">
        <HomeLeftSidebar />
      </div>
      <div className="main-content flex flex-auto justify-center ">
        <div className="w-full max-w-[36.875rem] px-8">
          This is the main section.
        </div>
      </div>
      <div className="min-w-[17.5rem] max-w-[22.5rem] flex-auto">
        <HomeRightSidebar />
      </div>
    </div>
  );
}

export default Home;
