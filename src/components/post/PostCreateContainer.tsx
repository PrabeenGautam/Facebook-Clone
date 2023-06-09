import { useState } from "react";
import { Link } from "react-router-dom";

import ComponentHolder from "../ComponentHolder";
import demo from "@/assets/profile/small.jpg";
import Separator from "../sidebar/Separator";
import CreatePostModal from "../modal/post/CreatePostModal";
import PostAudienceSelector from "../modal/post/PostAudienceSelector";
import { PostData } from "@/types/component/post.types";

function PostCreateContainer() {
  const [closeCreatePost, setCloseCreatePost] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  const [postData, setPostData] = useState<PostData>({
    post: "",
    uploadedFiles: [],
    audience: "Only Me",
  });

  const handleClose = () => {
    setCloseCreatePost(false);
    setShowPreview(false);
  };

  const handleOpen = () => {
    setCloseCreatePost(true);
  };

  const handleOpenImage = () => {
    setCloseCreatePost(true);
    setShowPreview(true);
  };

  const goToMain = () => {
    setActiveMenu("main");
  };

  const postHandleChange = (name: any, value: any) => {
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {closeCreatePost && activeMenu === "main" && (
        <CreatePostModal
          onClose={handleClose}
          show={showPreview}
          setShow={setShowPreview}
          setActiveMenu={setActiveMenu}
          postData={postData}
          setPostData={setPostData}
        />
      )}

      {closeCreatePost && activeMenu === "audience" && (
        <PostAudienceSelector
          onClose={goToMain}
          handleChange={postHandleChange}
          audienceValue={postData.audience}
        />
      )}

      <ComponentHolder>
        <div className={`mb-4 mt-2 flex space-x-2 px-2`}>
          <div className="center h-10 w-10 overflow-hidden rounded-full bg-[--comment] text-[--primary-text]">
            <Link to="/">
              <img src={demo} alt="me" />
            </Link>
          </div>

          <div
            className="flex w-full cursor-pointer items-center rounded-full bg-[--comment] px-4 text-[17px] text-[--placeholder-text]  hover:bg-[--comment-hover]"
            onClick={handleOpen}
          >
            What's on your mind, Prabin?
          </div>
        </div>

        <Separator />

        <div className="items-cente4 mt-4 flex">
          <span className="flex w-full cursor-pointer justify-center space-x-2 rounded-sm p-2 hover:bg-[--comment]">
            <img src="/image/video.png" alt="video" className="h-6 w-6" />
            <p>Live Video</p>
          </span>

          <span
            className="flex w-full cursor-pointer justify-center space-x-2 rounded-sm p-2 hover:bg-[--comment]"
            onClick={handleOpenImage}
          >
            <img src="/image/gallery.png" alt="gallery" className="h-6 w-6" />
            <p>Photo/video</p>
          </span>

          <span className="flex w-full cursor-pointer justify-center space-x-2 rounded-sm p-2 hover:bg-[--comment]">
            <img src="/image/emoji.png" alt="emoji" className="h-6 w-6" />
            <p>Feeling/activity</p>
          </span>
        </div>
      </ComponentHolder>
    </>
  );
}

export default PostCreateContainer;
