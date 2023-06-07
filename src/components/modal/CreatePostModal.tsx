import { useState, DragEvent } from "react";

import Modal from "./core/Modal";
import PostCreatorInfo from "../post/PostCreatorInfo";
import UploadImageVideo from "../post/UploadImageVideo";
import CreatePostDesc from "../post/CreatePostDesc";
import UploadImagePreview from "../preview/UploadImagePreview";
import { PostData } from "@/types/component/post.types";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  const [error, setError] = useState("");
  const [showImageUploader, setShowImageUploader] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const [postData, setPostData] = useState<PostData>({
    post: "",
    uploadedFiles: [],
  });

  const handleErrorAndSet = (files: FileList) => {
    setError("");

    const uploadedFiles = [];

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const [fileType, fileExt] = file.type.split("/");
      console.log(fileExt);
      const hasSupportedFile = ["image", "video"].includes(fileType);
      const validImageFormat = ["jpeg", "png"].includes(fileExt);
      const validVideoFormat = ["mpeg", "x-matroska"].includes(fileExt);

      if (!hasSupportedFile) {
        setError(
          `Given file: ${file.name} can not be uploaded. Only image and vidoe are supported.`
        );
        return;
      }

      if (fileType === "image" && !validImageFormat) {
        setError(
          `Given file: ${file.name} can not be uploaded. Try image having jpeg or png file support.`
        );
        return;
      }

      if (fileType === "video" && !validVideoFormat) {
        setError(
          `Given file: ${file.name} can not be uploaded. Try video having mpeg file support.`
        );
        return;
      }
      uploadedFiles.push({ type: fileType, file });
    }

    handleChange({ target: { name: "uploadedFiles", files: uploadedFiles } });
  };

  const postSetHandler = (name: string, value: string) =>
    handleChange({ target: { name, value } });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "uploadedFiles") {
      const file = event.target.files;
      setPostData((prev) => ({ ...prev, [name]: file }));
      setShowImagePreview(true);
      return;
    }
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = () => {
    console.log(postData);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    handleErrorAndSet(event.dataTransfer.files);
  };

  const closeFilePreview = () => {
    setPostData((prev) => ({ ...prev, uploadedFiles: [] }));
    setShowImagePreview(false);
  };

  return (
    <Modal
      heading="Create post"
      onClose={onClose}
      contentClassName="max-w-[30rem]"
    >
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="relative">
          <PostCreatorInfo />
          <div className="child-scroll max-h-[20rem]">
            <CreatePostDesc
              setPost={postSetHandler}
              showImage={showImageUploader}
            />
            {showImageUploader && postData.uploadedFiles.length === 0 && (
              <UploadImageVideo
                onClose={() => setShowImageUploader(false)}
                handleChange={handleErrorAndSet}
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
              <img
                src="/image/check-in.png"
                alt="check-in"
                className="h-6 w-6"
              />
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
          disabled={
            !Boolean(postData.post || postData.uploadedFiles.length > 0)
          }
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
    </Modal>
  );
}

export default CreatePostModal;
