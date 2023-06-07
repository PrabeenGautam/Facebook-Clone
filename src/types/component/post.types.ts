export interface UploadedFiles {
  type: "image" | "video";
  file: File;
}

export interface PostData {
  post: string;
  uploadedFiles: UploadedFiles[] | [];
}
