import Add from "../icons/Add";
import Bell from "../icons/Bell";
import Hamburger from "../icons/Hamburger";
import Messenger from "../icons/Messenger";

import demo from "@/assets/profile/small.jpg";
import Searcher from "../search/Searcher";
import Menu from "./../icons/Menu";

function Navbar() {
  return (
    <div className="relative flex h-14 items-center bg-[--nav-bg] px-4 md:justify-between">
      {/* top Section  */}
      <Searcher />

      {/* // Middle Section  */}
      <div className=" middle center mx-[5.5rem]  flex h-full w-full rounded-md text-[--secondary-text] active:bg-[--comment] md:mx-[6.5rem] lg:justify-center">
        <div className="flex">
          <Hamburger width={24} className="cursor-pointer select-none" />
        </div>
      </div>

      {/* // Right Section  */}
      <div className="right absolute right-0 top-0 !ml-auto flex justify-end space-x-2 py-2 text-[--primary-text]">
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
