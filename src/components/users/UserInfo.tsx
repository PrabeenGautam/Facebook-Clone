import { Link } from "react-router-dom";
import demo from "@/assets/profile/small.jpg";

function UserInfo({ link }: { link: string }) {
  return (
    <Link
      to={link}
      className="ml-2 flex items-center space-x-3 rounded-lg p-3 hover:bg-[--comment-hover]"
    >
      <img src={demo} className="h-9 w-9 rounded-full" alt="alt" />
      <span className="sidebar-label">Prabin Gautam</span>
    </Link>
  );
}

export default UserInfo;
