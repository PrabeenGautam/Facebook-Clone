import { useState } from "react";

import Modal from "../core/Modal";
import { PostModalProps, PostData } from "@/types/component/post.types";
import MainPostCreator from "./MainPostCreator";

function CreatePostModal({ onClose, show, setShow }: PostModalProps) {
  const [postData, setPostData] = useState<PostData>({
    post: "",
    uploadedFiles: [],
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "uploadedFiles") {
      const file = event.target.files;
      setPostData((prev) => ({ ...prev, [name]: file }));
      return;
    }
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      heading="Create post"
      onClose={onClose}
      contentClassName="max-w-[30rem]"
    >
      <MainPostCreator
        handleChange={handleChange}
        postData={postData}
        show={show}
        setShow={setShow}
      />
    </Modal>
  );
}

export default CreatePostModal;