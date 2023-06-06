function getFileBase64(file: File) {
  return URL.createObjectURL(file);
}

export default getFileBase64;
