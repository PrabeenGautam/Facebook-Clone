import getFileBase64 from "@/utils/getBase64";
import CloseButton from "../buttons/CloseButton";
import { Files } from "@/types/data/files.types";

interface UploadImagePreview {
  onClose: () => void;
  files: Files;
}

function UploadImagePreview({ onClose, files }: UploadImagePreview) {
  return (
    <div className="relative mt-3 flex items-center justify-between rounded-lg border border-[--divider] p-2">
      <div>
        {Array.from(files).map((file, id) => {
          return <img src={getFileBase64(file)} alt={`file-${id}`} />;
        })}
      </div>
      <CloseButton className="absolute right-4 top-4" onClose={onClose} />
    </div>
  );
}

export default UploadImagePreview;
