export interface UploadedFiles {
  type: "image" | "video";
  file: File;
}

export interface PostData {
  post: string;
  uploadedFiles: UploadedFiles[] | [];
}

export interface PostModalProps {
  onClose: () => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}

export interface CreatePostProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
