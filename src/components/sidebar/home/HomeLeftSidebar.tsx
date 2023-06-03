import Seperator from "../Seperator";
import HomeShortcut from "./HomeShortcut";
import HomeSidebarMenu from "./HomeSidebarMenu";

function HomeLeftSidebar() {
  return (
    <>
      <HomeSidebarMenu />
      <Seperator />
      <HomeShortcut />
    </>
  );
}

export default HomeLeftSidebar;
