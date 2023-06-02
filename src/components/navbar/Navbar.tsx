import Add from "../icons/Add";
import Bell from "../icons/Bell";
import Hamburger from "../icons/Hamburger";
import Messenger from "../icons/Messenger";

import demo from "@/assets/profile/small.jpg";
import Searcher from "../search/Searcher";

function Navbar() {
  return (
    <div className="relative flex h-14 items-center space-x-4 bg-[--nav-bg] px-4 md:justify-between">
      <Searcher />
      <div className="middle center !ml-[5.5rem] h-12 w-12 rounded-md text-[--secondary-text] active:bg-[--comment]">
        <Hamburger width={24} className="cursor-pointer select-none" />
      </div>

      <div className="right !ml-auto flex justify-end space-x-2 text-[--primary-text]">
        <div className="icons text-[--primary-text]">
          <Add width={20} />
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
