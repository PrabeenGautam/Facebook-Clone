import getFileBase64 from "@/utils/getBase64";
import CloseButton from "../buttons/CloseButton";
import { UploadedFiles } from "@/types/component/post.types";

interface UploadImagePreview {
  onClose: () => void;
  files: UploadedFiles[];
}

function UploadImagePreview({ onClose, files }: UploadImagePreview) {
  const renderedFiles = Array.from(files).slice(0, 4);
  return (
    <div className="relative mt-3 flex items-center justify-between rounded-lg border border-[--divider] p-2">
      <div className="columns-2 gap-2 space-y-2">
        {renderedFiles.map((data, id) => {
          return (
            <div key={id} className="aspect-auto break-inside-avoid">
              <img
                src={getFileBase64(data.file)}
                alt={`file-${id}`}
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
      <CloseButton className="absolute right-4 top-4" onClose={onClose} />
    </div>
  );
}

export default UploadImagePreview;
