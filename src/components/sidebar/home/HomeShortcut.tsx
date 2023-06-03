import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SidebarShortcut } from "@/types/data/sidebar.types";
import UpArrow from "@/components/icons/arrow/UpArrow";
import DownArrow from "@/components/icons/arrow/DownArrow";
import sidebarShortcut from "@/assets/data/sidebarShortcut.data";

function HomeShortcut() {
  const [data, setData] = useState([] as SidebarShortcut[]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const data = fetch ? sidebarShortcut : sidebarShortcut.slice(0, 5);
    setData(data);
  }, [fetch]);
  return (
    <div>
      <div className="heading group mx-4 my-4 flex justify-between">
        <p className="title text-[17px] font-semibold text-[--secondary-text]">
          Your shortcuts
        </p>
        <Link
          to={"/"}
          className="invisible p-1 text-smm text-blue-link group-hover:visible hover:bg-[--comment]"
        >
          Edit
        </Link>
      </div>

      <div className="content">
        <ul>
          {data.map((item) => {
            return (
              <li key={item._id}>
                <Link
                  to={"/"}
                  className="ml-2 flex min-h-[44px] items-center space-x-3 rounded-lg px-3 hover:bg-[--comment-hover]"
                >
                  <img
                    className="sidebar-img my-2"
                    src={item.image}
                    alt={item.label}
                  />
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            );
          })}

          <li onClick={() => setFetch((prev) => !prev)}>
            <div className="sidebar-more ml-2 flex cursor-pointer items-center space-x-3 rounded-lg px-3 py-2 hover:bg-[--comment-hover]">
              <div className="icons w-9 text-[--primary-text]">
                {fetch ? <UpArrow width={20} /> : <DownArrow width={20} />}
              </div>
              <span className="sidebar-label">
                {fetch ? "See Less" : "See More"}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeShortcut;
