import { Link } from "react-router-dom";
import Modal from "./core/Modal";
import demo from "@/assets/profile/small.jpg";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  return (
    <Modal heading="Create post" onClose={onClose} contentClassName="max-w-lg">
      <div>
        <div className="flex items-center space-x-3 rounded-lg">
          <Link to={"/"}>
            <img src={demo} className="h-10 w-10 rounded-full" alt="alt" />
          </Link>
          <div>
            <span className="sidebar-label">Prabin Gautam</span>
            <div className="flex w-fit items-center space-x-1 rounded-md bg-[--secondary-btn-bg] px-2 py-1">
              <img
                className="filter-primary h-3 w-3"
                src="/image/lock.png"
                alt="lock"
              />
              <span className="text-[13px] font-semibold leading-4">
                Only Me
              </span>
              <i className="filter-primary inline-block h-3 w-3 bg-whole bg-no-repeat [background-position-x:-124px] [background-position-y:-150px]"></i>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePostModal;
