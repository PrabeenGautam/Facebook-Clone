import { UploadedFiles } from "@/types/component/post.types";
import getFileBase64 from "@/utils/getBase64";

function PreviewContainer({ files }: { files: UploadedFiles[] }) {
  return (
    <>
      {files.map((data, id) => {
        return (
          <div key={id} className="break-inside-avoid">
            {data.type === "image" && (
              <img
                src={getFileBase64(data.file)}
                alt={`file-${id}`}
                className="h-full w-full"
              />
            )}

            {data.type === "video" && (
              <video
                src={getFileBase64(data.file)}
                className="h-full w-full"
                controls
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default PreviewContainer;
