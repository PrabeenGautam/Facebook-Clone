import { ClipboardEvent } from "react";

function resetPasteStyle(event: ClipboardEvent<HTMLDivElement>) {
  event.preventDefault();
  const text = event.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
}

export default resetPasteStyle;
