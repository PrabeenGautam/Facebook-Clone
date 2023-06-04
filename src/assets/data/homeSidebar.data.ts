import { HomeSidebarProps } from "@/types/sidebar/sidebar.types";

const homeSidebar: HomeSidebarProps[] = [
  {
    label: "Friends",
    className: "bg-sidebar-home bg-sidebar",
    position: "0px -304px",
  },
  {
    label: "Messenger",
    className: "bg-sidebar-social bg-social",
    position: "0px -38px",
  },
  {
    label: "Feeds (Most Recent)",
    img: "./image/feeds.png",
  },
  {
    label: "Groups",
    className: "bg-sidebar-home bg-sidebar",
    position: "0px -76px",
  },
  {
    label: "Marketplace",
    position: "0px -418px",
    className: "bg-sidebar-home bg-sidebar",
  },
  {
    label: "Gaming Videos",
    img: "./image/gaming.png",
  },
  {
    label: "Memories",
    position: "0px -456px",
    className: "bg-sidebar-home bg-sidebar",
  },
  {
    label: "Pages",
    position: "0px -114px",
    className: "bg-sidebar-home bg-sidebar",
  },
  {
    label: "Recent Activity",
    img: "./image/recent-activity.png",
  },
  {
    label: "Saved",
    position: "0px -190px",
    className: "bg-sidebar-home bg-sidebar",
  },
  {
    label: "Watch",
    position: "0px -532px",
    className: "bg-sidebar-home bg-sidebar",
  },
];

export default homeSidebar;
