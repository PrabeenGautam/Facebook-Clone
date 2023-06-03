import Add from "../icons/Add";
import Bell from "../icons/Bell";
import Hamburger from "../icons/Hamburger";
import Messenger from "../icons/Messenger";

import demo from "@/assets/profile/small.jpg";
import Gaming from "../icons/Gaming";
import Groups from "../icons/Groups";
import Home from "../icons/Home";
import MarketPlace from "../icons/MarketPlace";
import Watch from "../icons/Watch";
import Searcher from "../search/Searcher";
import Menu from "./../icons/Menu";

interface Navbar {
  handleSidebar: () => void;
}

function Navbar({ handleSidebar }: Navbar) {
  return (
    <div className="sticky top-0 z-50 flex  h-[--h-header] items-center bg-[--nav-bg] px-4 md:justify-between">
      {/* top Section  */}
      <Searcher />

      {/* // Middle Section  */}
      <div className="middle ml-[6.5rem] flex h-full w-full items-center justify-start text-[--secondary-text]  md:mr-[6.5rem] md:justify-center md:space-x-2">
        <div className="nav-active hidden h-full max-w-[4rem] active:bg-[--comment] md:flex md:max-w-[3.5rem] md:flex-grow md:items-center md:justify-center  lg:max-w-[5rem] xl:max-w-[111.6px]">
          <Home width={28} className="cursor-pointer select-none" />
        </div>
        <div className="hidden h-full flex-grow  active:bg-[--comment] md:flex  md:max-w-[3.5rem] md:items-center md:justify-center  lg:max-w-[5rem] xl:max-w-[111.6px] ">
          <Watch width={28} className="cursor-pointer select-none" />
        </div>
        <div className="hidden  h-full flex-grow active:bg-[--comment]  md:flex md:max-w-[3.5rem]  md:items-center md:justify-center  lg:max-w-[5rem] xl:max-w-[111.6px] ">
          <MarketPlace width={28} className="cursor-pointer select-none" />
        </div>
        <div className="hidden h-full flex-grow active:bg-[--comment]  md:flex md:max-w-[3.5rem] md:items-center  md:justify-center  lg:max-w-[5rem] xl:max-w-[111.6px] ">
          <Groups width={28} className="cursor-pointer select-none" />
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center active:bg-[--comment] md:h-full md:max-w-[3.5rem] md:flex-grow  lg:max-w-[5rem] xl:hidden"
          onClick={handleSidebar}
        >
          <Hamburger width={28} className="cursor-pointer select-none" />
        </div>
        <div className="hidden h-full flex-grow active:bg-[--comment]  md:max-w-[3.5rem] md:items-center md:justify-center  lg:max-w-[5rem]  xl:flex xl:max-w-[111.6px] ">
          <Gaming width={28} className="cursor-pointer select-none" />
        </div>
      </div>

      {/* // Right Section  */}
      <div className="right flex justify-end space-x-2 px-4 py-3 text-[--primary-text] md:absolute md:right-0 md:top-0">
        <div className="icons text-[--primary-text] xl:hidden">
          <Add width={20} />
        </div>
        <div className="icons hidden text-[--primary-text] xl:flex">
          <Menu width={20} />
        </div>
        <div className="icons text-[--primary-text]">
          <Messenger width={20} />
        </div>
        <div className="icons text-[--primary-text]">
          <Bell width={20} />
        </div>
        <div className="center h-10 w-10 overflow-hidden rounded-full bg-[--comment] text-[--primary-text]">
          <img src={demo} alt="me" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
