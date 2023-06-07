import { UploadedFiles } from "@/types/component/post.types";
import getFileBase64 from "@/utils/getBase64";

function PreviewContainer({ files }: { files: UploadedFiles[] }) {
  const renderedFiles = Array.from(files).slice(0, 4);
  const renderedLength = renderedFiles.length;
  const remainFile = files.length - renderedLength;
  const isEven = renderedLength % 2 === 0;

  return (
    <>
      {renderedFiles.map((data, id) => {
        return (
          <div
            key={id}
            style={{ "--remain": `+${remainFile}` } as React.CSSProperties}
            className={`relative ${
              !isEven && id === renderedLength - 1 && "col-span-2"
            }`}
          >
            {id === renderedLength - 1 && remainFile > 0 && (
              <span className="center absolute inset-0 inline-block bg-[--dark-overlay] text-[2rem] text-[--primary-text-on-media]">{`+${remainFile}`}</span>
            )}

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
