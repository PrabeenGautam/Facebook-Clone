import { Link } from "react-router-dom";
import demo from "@/assets/profile/small.jpg";
import { UsersInfo } from "@/types/data/users.types";

function UserInfo({ link, user }: UsersInfo) {
  return (
    <Link
      to={link}
      className="ml-2 flex items-center space-x-3 rounded-lg p-3 hover:bg-[--comment-hover]"
    >
      <img
        src={user?.image || demo}
        className="h-9 w-9 rounded-full"
        alt="alt"
      />
      <span className="sidebar-label">{user?.name || "Prabin Gautam"}</span>
    </Link>
  );
}

export default UserInfo;
