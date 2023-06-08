import { useState } from "react";
import Modal from "../core/Modal";

interface PostViewProps {
  onClose: () => void;
  onConfirm: () => void;
}

function PostViewSelector({ onClose, onConfirm }: PostViewProps) {
  const [audience, setAudience] = useState("private");

  return (
    <Modal
      heading="Post Audience"
      showClose={false}
      showPrev={true}
      contentClassName="max-w-[31.25rem]"
      onClose={onClose}
    >
      <div className="scroll max-h-[320px] overflow-y-auto pr-3">
        <div>
          <p className="mb-1 text-base-up font-semibold">
            Who can see your post?
          </p>
          <p className="mb-2 text-[--secondary-text]">
            Your post will show up in Feed, on your profile and in search
            results.
          </p>
          <p className="mb-2 text-[--secondary-text]">
            Your default audience is set to{" "}
            <span className="font-semibold">Only me</span>, but you can change
            the audience of this specific post.
          </p>
        </div>
        <label
          className="flex cursor-pointer select-none items-center space-x-2 rounded-md p-2 hover:bg-[--comment-hover] "
          onClick={() => setAudience("public")}
        >
          <div className="center aspect-square w-[60px] rounded-full bg-[--comment]">
            <img
              src="./image/public.png"
              alt="public"
              className="filter-primary h-6 w-6"
            />
          </div>
          <div className="flex-grow">
            <p className="text-base-up font-medium">Public</p>
            <span className="text-smm text-[--secondary-text]">
              Anyone on or off Facebook
            </span>
          </div>
          <i
            className={`bg-reset h-5 w-5 bg-whole ${
              audience === "public"
                ? "filter-accent [background-position:-110px_-88px]"
                : "filter-secondary [background-position:-132px_-88px]"
            }`}
          ></i>
        </label>
        <label
          className="flex cursor-pointer select-none items-center space-x-2 rounded-md p-2 hover:bg-[--comment-hover] "
          onClick={() => setAudience("friends")}
        >
          <div className="center aspect-square w-[60px] rounded-full bg-[--comment]">
            <img
              src="./image/friends.png"
              alt="friends"
              className="filter-primary h-6 w-6"
            />
          </div>
          <div className="flex-grow">
            <p className="text-base-up font-medium">Friends</p>
            <span className="text-smm text-[--secondary-text]">
              Your friends on Facebook
            </span>
          </div>
          <i
            className={`bg-reset h-5 w-5 bg-whole ${
              audience === "friends"
                ? "filter-accent [background-position:-110px_-88px]"
                : "filter-secondary [background-position:-132px_-88px]"
            }`}
          ></i>
        </label>
        <label
          className="flex cursor-pointer select-none items-center space-x-2 rounded-md p-2 hover:bg-[--comment-hover] "
          onClick={() => setAudience("private")}
        >
          <div className="center aspect-square w-[60px] rounded-full bg-[--comment]">
            <img
              src="./image/private.png"
              alt="private"
              className="filter-primary h-6 w-6"
            />
          </div>
          <div className="flex-grow">
            <p className="text-base-up font-medium">Only me</p>
          </div>
          <i
            className={`bg-reset h-5 w-5 bg-whole ${
              audience === "private"
                ? "filter-accent [background-position:-110px_-88px]"
                : "filter-secondary [background-position:-132px_-88px]"
            }`}
          ></i>
        </label>
      </div>

      <div className="mt-6 flex select-none justify-end space-x-3">
        <button
          className="rounded-md px-4 text-smm font-semibold text-[--active] hover:bg-[--comment]"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="h-9 w-24 rounded-md bg-[--active] text-smm font-semibold text-white hover:opacity-90"
          onClick={onConfirm}
        >
          Done
        </button>
      </div>
    </Modal>
  );
}

export default PostViewSelector;
