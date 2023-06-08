export interface UploadedFiles {
  type: "image" | "video";
  file: File;
}

export interface PostData {
  post: string;
  uploadedFiles: UploadedFiles[] | [];
  audience: "Public" | "Friends" | "Only Me";
}

export interface PostDataSetProps {
  setPostData: React.Dispatch<React.SetStateAction<PostData>>;
  postData: PostData;
}

export interface PostModalProps extends PostDataSetProps {
  onClose: () => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}

export interface CreatePostProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
