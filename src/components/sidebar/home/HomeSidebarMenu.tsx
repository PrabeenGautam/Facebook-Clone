import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import demo from "@/assets/profile/small.jpg";
import homeSidebar from "@/assets/data/homeSidebar.data";
import { HomeSidebarProps } from "@/types/sidebar/sidebar.types";
import SeeMore from "@/components/buttons/SeeMore";

function HomeSidebarMenu() {
  const [data, setData] = useState([] as HomeSidebarProps[]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const data = fetch ? homeSidebar : homeSidebar.slice(0, 6);
    setData(data);
  }, [fetch]);
  return (
    <ul>
      <li>
        <Link
          to={"/"}
          className="ml-2 flex items-center space-x-3 rounded-lg p-3 hover:bg-[--comment-hover]"
        >
          <img src={demo} className="h-9 w-9 rounded-full" alt="alt" />
          <span className="sidebar-label">Prabin Gautam</span>
        </Link>
      </li>

      {data.map((item) => {
        return (
          <li key={item.label}>
            <Link
              to={"/"}
              className="ml-2 flex min-h-[44px] items-center space-x-3 rounded-lg px-3 hover:bg-[--comment-hover]"
            >
              {item.img ? (
                <img
                  className="sidebar-img my-2"
                  src={item.img}
                  alt={item.label}
                />
              ) : (
                <i
                  style={{ backgroundPosition: item.position }}
                  className={`sidebar-img my-2 ${item.className}`}
                ></i>
              )}
              <span className="sidebar-label">{item.label}</span>
            </Link>
          </li>
        );
      })}

      <li onClick={() => setFetch((prev) => !prev)}>
        <SeeMore show={fetch} />
      </li>
    </ul>
  );
}

export default HomeSidebarMenu;
