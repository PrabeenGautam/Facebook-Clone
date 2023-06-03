import { useEffect, useRef, useState } from "react";
import Facebook from "../icons/Facebook";
import LeftArrowFull from "../icons/arrow/LeftArrowFull";
import Search from "../icons/Search";

function Searcher() {
  const [isInputFocused, setInputFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setInputFocused(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div
      ref={searchRef}
      className={`left absolute left-0 top-0 rounded-lg bg-[--nav-bg] py-3 ${
        isInputFocused && "search-shadow"
      }`}
    >
      <div
        className={`flex space-x-2 px-4 ${isInputFocused && "md:space-x-2"}`}
      >
        {!isInputFocused ? (
          <Facebook />
        ) : (
          <div
            className="center h-10 w-10 cursor-pointer rounded-full hover:bg-[--comment]"
            onClick={handleInputBlur}
          >
            <LeftArrowFull
              width={20}
              className="animate-fade-left text-[--secondary-text]"
            />
          </div>
        )}
        <label
          onClick={handleInputFocus}
          htmlFor="search"
          className={`flex w-10 overflow-hidden rounded-full bg-[--comment] text-[--secondary-text] lg:w-60 ${
            isInputFocused && "w-60"
          }`}
        >
          <span
            className={`center h-10 pl-2 lg:justify-start ${
              isInputFocused ? "pl-2" : "pl-3"
            }`}
          >
            <Search width={16} className={isInputFocused ? "hidden" : ""} />
          </span>
          <input
            className={` ${
              !isInputFocused && "hidden"
            } w-full rounded-full border-none bg-[--comment] px-2 text-[15px] text-[--primary-text]  outline-none placeholder:text-[--secondary-text] focus:placeholder:text-[#838489] lg:block`}
            type="text"
            id="search"
            placeholder="Search Facebook"
            onFocus={handleInputFocus}
          />
        </label>
      </div>

      {isInputFocused && (
        <div className="center my-3 h-9 ">
          <span className="inline-block text-center text-[--placeholder-text]">
            No recent searches
          </span>
        </div>
      )}
    </div>
  );
}

export default Searcher;
