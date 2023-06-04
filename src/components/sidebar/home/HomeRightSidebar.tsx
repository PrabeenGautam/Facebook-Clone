import UserInfo from "@/components/users/UserInfo";
import Separator from "../Separator";
import MoreMenu from "@/components/icons/MoreMenu";
import friends from "@/assets/data/friends.data";
import Video from "@/components/icons/Video";
import Search from "@/components/icons/Search";

function HomeRightSidebar() {
  return (
    <>
      <div>
        <div className="heading group mx-4 mb-1 mt-2 flex justify-between">
          <p className="title text-[17px] font-semibold text-[--secondary-text]">
            Your Pages and Profiles
          </p>

          <span className="center aspect-square w-8 cursor-pointer rounded-full text-[--secondary-text] hover:bg-[--comment-hover]">
            <MoreMenu width={14} />
          </span>
        </div>

        <ul className="content">
          <li>
            <UserInfo
              link="/"
              user={{
                image:
                  "https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-1/302284818_520008266740770_192720444211066617_n.png?stp=cp0_dst-png_p86x86&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=4KsOW95T1dsAX8jESsj&_nc_ht=scontent.fktm14-1.fna&oh=00_AfAOPDBHsu4Nd3-YfdybTM0ju8mGE4SfAZ99D3caWKL4lA&oe=647F7925",
                name: "Andraware",
              }}
            />
          </li>
        </ul>
      </div>

      <Separator />

      <div>
        <div className="heading group mx-4 my-4 flex items-center justify-between">
          <p className="title text-[17px] font-semibold text-[--secondary-text]">
            Contacts
          </p>

          <div className="flex items-center space-x-4">
            <span className="center aspect-square w-8 cursor-pointer rounded-full text-[--secondary-text] hover:bg-[--comment-hover]">
              <Video width={16} />
            </span>
            <span className="center aspect-square w-8 cursor-pointer rounded-full text-[--secondary-text] hover:bg-[--comment-hover]">
              <Search width={16} />
            </span>
            <span className="center aspect-square w-8 cursor-pointer rounded-full text-[--secondary-text] hover:bg-[--comment-hover]">
              <MoreMenu width={18} />
            </span>
          </div>
        </div>

        <ul className="content">
          {friends.map((user, index) => {
            return (
              <li key={index}>
                <UserInfo link="/" user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomeRightSidebar;
