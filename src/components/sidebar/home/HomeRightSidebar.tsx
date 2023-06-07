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
                  "https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-1/302284818_520008266740770_192720444211066617_n.png?stp=dst-png_p320x320&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=c6021c&_nc_ohc=Mziim3MTHZkAX9T7vN0&_nc_ht=scontent.fktm14-1.fna&oh=00_AfBwknGA3npLLx5YbXYwibT94GC-5KbX2VoGkEja9iEn1A&oe=648567E5",
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

          <div className="flex items-center space-x-1">
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
