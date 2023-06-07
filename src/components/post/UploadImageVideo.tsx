import { ChangeEvent } from "react";
import CloseButton from "../buttons/CloseButton";

interface UploadImageProps {
  onClose: () => void;
  handleChange: (files: FileList) => void;
}

function UploadImageVideo({ onClose, handleChange }: UploadImageProps) {
  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      handleChange(event.target.files);
    }
  }
  return (
    <div className="relative mt-3 flex items-center justify-between rounded-lg border border-[--divider] p-2">
      <label
        htmlFor="image-video"
        className="flex h-full min-h-[11rem] flex-auto cursor-pointer flex-col items-center justify-center bg-[--card-bg-flat] hover:bg-[#4e4f50]"
      >
        <div className="bg-hover center h-10 w-10 rounded-full">
          <i className="bg-reset filter-primary w-5 bg-icons [background-position-y:-86px]"></i>
        </div>
        <p className="text-[17px] font-medium">Add Photos/Videos</p>
        <span className="text-xs text-[--secondary-text]">
          or drag and drop
        </span>
        <input
          hidden
          name="file"
          id="image-video"
          type="file"
          accept="image/png, image/jpeg, video/mp4, video/x-matroska"
          multiple
          onChange={handleImageChange}
        />
      </label>
      <CloseButton className="absolute right-4 top-4" onClose={onClose} />
    </div>
  );
}

export default UploadImageVideo;
