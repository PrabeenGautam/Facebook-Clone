const handleErrorAndUpload = (files: FileList) => {
  const uploadedFiles = [];

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const [fileType, fileExt] = file.type.split("/");
    const hasSupportedFile = ["image", "video"].includes(fileType);
    const validImageFormat = ["jpeg", "png"].includes(fileExt);
    const validVideoFormat = ["mpeg", "x-matroska"].includes(fileExt);

    if (!hasSupportedFile) {
      return {
        message: `Given file: ${file.name} can not be uploaded. Only image and vidoe are supported.`,
        hasError: true,
      };
    }

    if (fileType === "image" && !validImageFormat) {
      return {
        message: `Given file: ${file.name} can not be uploaded. Try image having jpeg or png file support.`,
        hasError: true,
      };
    }

    if (fileType === "video" && !validVideoFormat) {
      return {
        message: `Given file: ${file.name} can not be uploaded. Try video having mpeg file support.`,
        hasError: true,
      };
    }

    uploadedFiles.push({ type: fileType, file });
  }

  return { data: uploadedFiles, hasError: false };
  // handleChange({ target: { name: "uploadedFiles", files: uploadedFiles } });
};

export default handleErrorAndUpload;
