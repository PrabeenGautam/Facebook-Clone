import DownArrow from "../icons/arrow/DownArrow";
import UpArrow from "../icons/arrow/UpArrow";

function SeeMore({ show }: { show: boolean }) {
  return (
    <div className="sidebar-more group ml-2 flex cursor-pointer items-center space-x-3 rounded-lg px-3 py-2 hover:bg-[--comment-hover]">
      <div className="icons w-9 text-[--primary-text] group-hover:bg-[--icon-hover]">
        {show ? <UpArrow width={20} /> : <DownArrow width={20} />}
      </div>
      <span className="sidebar-label">{show ? "See Less" : "See More"}</span>
    </div>
  );
}

export default SeeMore;
