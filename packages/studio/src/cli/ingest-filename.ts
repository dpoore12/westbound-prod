import { basename } from "node:path";

/** Preserve real ref filenames for dashboard checklist matching. */
export function ingestFilenameFromPath(filePath: string): string {
  const name = basename(filePath);
  return name || "upload.bin";
}

export function ingestTagsForFilename(filename: string): string[] {
  const tags = ["cli_upload"];
  if (filename.startsWith("teaser1_")) {
    tags.push("teaser1");
  } else {
    tags.push("ref_pack");
  }
  return tags;
}
