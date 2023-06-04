import Separator from "../Separator";
import HomeShortcut from "./HomeShortcut";
import HomeSidebarMenu from "./HomeSidebarMenu";

function HomeLeftSidebar() {
  return (
    <>
      <HomeSidebarMenu />
      <Separator />
      <HomeShortcut />
    </>
  );
}

export default HomeLeftSidebar;
