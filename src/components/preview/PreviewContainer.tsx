import { UploadedFiles } from "@/types/component/post.types";
import getFileBase64 from "@/utils/getBase64";

function PreviewContainer({ files }: { files: UploadedFiles[] }) {
  const renderedFiles = Array.from(files).slice(0, 4);
  const renderedLength = renderedFiles.length;
  const remainFile = files.length - renderedLength;
  const isEven = files.length % 2 === 0;

  return (
    <>
      {renderedFiles.map((data, id) => {
        return (
          <div
            key={id}
            className={`relative ${
              id === renderedLength - 1 &&
              remainFile > 0 &&
              "before:absolute before:inset-0 before:bg-[--dark-overlay]"
            } ${!isEven && id === renderedLength - 1 && "col-span-2"}`}
          >
            {data.type === "image" && (
              <img
                src={getFileBase64(data.file)}
                alt={`file-${id}`}
                className="h-full w-full object-cover"
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
