import CloseButton from "../buttons/CloseButton";
import { UploadedFiles } from "@/types/component/post.types";
import PreviewContainer from "./PreviewContainer";

interface UploadImagePreview {
  onClose: () => void;
  files: UploadedFiles[];
}

function UploadImagePreview({ onClose, files }: UploadImagePreview) {
  return (
    <div className="relative mt-3 flex items-center justify-between rounded-lg border border-[--divider] p-2">
      <div className="grid grid-cols-2 gap-2 ">
        <PreviewContainer files={files} />
      </div>
      <CloseButton className="absolute right-4 top-4" onClose={onClose} />
    </div>
  );
}

export default UploadImagePreview;
