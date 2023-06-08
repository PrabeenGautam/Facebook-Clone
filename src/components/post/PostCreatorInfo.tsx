import { Link } from "react-router-dom";
import React from "react";

import demo from "@/assets/profile/small.jpg";

interface PostCreatorProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
  audience: "Public" | "Friends" | "Only Me";
}

function PostCreatorInfo({ setActiveMenu, audience }: PostCreatorProps) {
  const image =
    audience === "Only Me"
      ? "lock"
      : audience === "Friends"
      ? "friends"
      : "public";

  return (
    <div className="flex items-center space-x-3 rounded-lg">
      <Link to={"/"}>
        <img src={demo} className="h-12 w-12 rounded-full" alt="alt" />
      </Link>
      <div>
        <span className="sidebar-label">Prabin Gautam</span>
        <div
          className="mt-1 flex w-fit cursor-pointer items-center space-x-2 rounded-md bg-[--secondary-btn-bg] px-2 py-1"
          onClick={() => setActiveMenu("audience")}
        >
          <img
            className="filter-primary h-3 w-3"
            src={`/image/${image}.png`}
            alt="lock"
          />
          <span className="text-[13px] font-semibold leading-4">
            {audience}
          </span>
          <i className="filter-primary inline-block h-3 w-3 bg-whole bg-no-repeat [background-position-x:-124px] [background-position-y:-150px]"></i>
        </div>
      </div>
    </div>
  );
}

export default PostCreatorInfo;
