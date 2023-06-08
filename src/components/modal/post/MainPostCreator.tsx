import { useState, DragEvent } from "react";

import PostCreatorInfo from "../../post/PostCreatorInfo";
import UploadImageVideo from "../../post/UploadImageVideo";
import CreatePostDesc from "../../post/CreatePostDesc";
import UploadImagePreview from "../../preview/UploadImagePreview";
import handleErrorAndUpload from "@/utils/handleErrorAndUpload";
import { CreatePostProps, PostData } from "@/types/component/post.types";

interface PostProps extends CreatePostProps {
  handleChange: (event: any) => void;
  postData: PostData;
}

function MainPostCreator({ postData, handleChange, show, setShow }: PostProps) {
  const [error, setError] = useState("");
  const [showImagePreview, setShowImagePreview] = useState(false);

  const handleUploadedFile = function (files: FileList) {
    const status = handleErrorAndUpload(files);
    if (status.hasError && status.message) {
      setError(status.message);
      return;
    }

    handleChange({ target: { name: "uploadedFiles", files: status.data } });
    setShowImagePreview(true);
  };

  const handlePostSubmit = () => {
    console.log(postData);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    handleUploadedFile(event.dataTransfer.files);
  };

  const closeFilePreview = () => {
    handleChange({ target: { name: "uploadedFiles", files: [] } });
    setShowImagePreview(false);
    setError("");
  };

  const postSetHandler = (name: string, value: string) =>
    handleChange({ target: { name, value } });

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="relative">
        <PostCreatorInfo />
        <div className="child-scroll max-h-[20rem]">
          <CreatePostDesc setPost={postSetHandler} showImage={show} />
          {show && postData.uploadedFiles.length === 0 && (
            <UploadImageVideo
              onClose={() => {
                setShow(false);
                setError("");
              }}
              handleChange={handleUploadedFile}
            />
          )}
          {showImagePreview && postData.uploadedFiles.length > 0 && (
            <UploadImagePreview
              onClose={closeFilePreview}
              files={postData.uploadedFiles}
            />
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-[--divider] px-4 py-2">
        <span className="text-smm font-semibold">Add to your post</span>
        <div className="flex items-center space-x-1">
          <div
            onClick={() => setShow((prev) => !prev)}
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
        disabled={!Boolean(postData.post || postData.uploadedFiles.length > 0)}
        className={`mt-3 h-9 w-full rounded-md px-3 ${
          postData.post || postData.uploadedFiles.length > 0
            ? "cursor-pointer bg-[--primary-btn-bg]"
            : "cursor-not-allowed bg-[--btn-disabled]"
        }`}
      >
        Post
      </button>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default MainPostCreator;
