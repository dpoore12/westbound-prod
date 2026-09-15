/** Tag Dan ref uploads for Review checklist matching. */
export function ingestTagsForFilename(filename: string): string[] {
  const tags = ["dashboard_upload"];
  if (filename.startsWith("teaser1_")) {
    tags.push("teaser1");
  } else {
    tags.push("ref_pack");
  }
  return tags;
}
