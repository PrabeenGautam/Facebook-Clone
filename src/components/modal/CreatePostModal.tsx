import { useState } from "react";

import Modal from "./core/Modal";
import PostCreatorInfo from "../post/PostCreatorInfo";
import UploadImageVideo from "../post/UploadImageVideo";
import CreatePostDesc from "../post/CreatePostDesc";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  const [post, setPost] = useState("");
  const [showImageUploader, setShowImageUploader] = useState(false);

  const postSetHandler = (post: string) => {
    setPost(post);
  };

  const handlePostSubmit = () => {
    if (!post) return;
    console.log(post);
  };

  return (
    <Modal heading="Create post" onClose={onClose} contentClassName="max-w-lg">
      <div className="relative">
        <PostCreatorInfo />
        <div className="child-scroll max-h-[20rem]">
          <CreatePostDesc
            setPost={postSetHandler}
            showImage={showImageUploader}
          />
          {showImageUploader && (
            <UploadImageVideo onClose={() => setShowImageUploader(false)} />
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg border border-[--divider] px-4 py-2">
        <span className="text-smm font-semibold">Add to your post</span>
        <div className="flex items-center space-x-2">
          <div
            onClick={() => setShowImageUploader((prev) => !prev)}
            className="icons h-10 w-10 cursor-pointer bg-transparent"
            title="Photo/Video"
          >
            <img src="/image/gallery.png" alt="gallery" className="h-6 w-6" />
          </div>
          <div
            className="icons h-10 w-10 cursor-pointer bg-transparent"
            title="Photo/Video"
          >
            <img src="/image/tag.png" alt="tag" className="h-6 w-6" />
          </div>
          <div
            className="icons h-10 w-10 cursor-pointer bg-transparent"
            title="Photo/Video"
          >
            <img
              src="/image/happy-emoji.png"
              alt="happy-emoji"
              className="h-6 w-6"
            />
          </div>
          <div
            className="icons h-10 w-10 cursor-pointer bg-transparent"
            title="Photo/Video"
          >
            <img src="/image/check-in.png" alt="check-in" className="h-6 w-6" />
          </div>
          <div
            className="icons h-10 w-10 cursor-pointer bg-transparent"
            title="Photo/Video"
          >
            <img src="/image/gif.png" alt="gif" className="h-6 w-6" />
          </div>
        </div>
      </div>

      <button
        onClick={handlePostSubmit}
        disabled={!Boolean(post)}
        className={`mt-3 h-9 w-full rounded-md px-3 ${
          post
            ? "cursor-pointer bg-[--primary-btn-bg]"
            : "cursor-not-allowed bg-[--btn-disabled]"
        }`}
      >
        Post
      </button>
    </Modal>
  );
}

export default CreatePostModal;
