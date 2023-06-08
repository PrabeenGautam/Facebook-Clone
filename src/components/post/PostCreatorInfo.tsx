import { Link } from "react-router-dom";
import React from "react";

import demo from "@/assets/profile/small.jpg";

interface PostCreatorProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}

function PostCreatorInfo({ setActiveMenu }: PostCreatorProps) {
  return (
    <div className="flex items-center space-x-3 rounded-lg">
      <Link to={"/"}>
        <img src={demo} className="h-12 w-12 rounded-full" alt="alt" />
      </Link>
      <div>
        <span className="sidebar-label">Prabin Gautam</span>
        <div className="mt-1 flex w-fit items-center space-x-1 rounded-md bg-[--secondary-btn-bg] px-2 py-1">
          <img
            className="filter-primary h-3 w-3"
            src="/image/lock.png"
            alt="lock"
          />
          <span
            className="cursor-pointer text-[13px] font-semibold leading-4"
            onClick={() => setActiveMenu("audience")}
          >
            Only Me
          </span>
          <i className="filter-primary inline-block h-3 w-3 bg-whole bg-no-repeat [background-position-x:-124px] [background-position-y:-150px]"></i>
        </div>
      </div>
    </div>
  );
}

export default PostCreatorInfo;
