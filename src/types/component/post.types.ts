export interface UploadedFiles {
  type: "image" | "video";
  file: File;
}

export interface PostData {
  post: string;
  uploadedFiles: UploadedFiles[] | [];
}

export interface CreatePostProps {
  onClose: () => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
