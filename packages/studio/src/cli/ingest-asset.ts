#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { AssetLibrary } from "../asset-library.js";
import {
  ingestFilenameFromPath,
  ingestTagsForFilename,
} from "./ingest-filename.js";

async function main() {
  const [filePath, project = "studio", entity = "sammy_rane", type = "image"] =
    process.argv.slice(2);
  if (!filePath) {
    console.error(
      "Usage: ingest-asset <file> [project] [entity] [type]"
    );
    process.exit(1);
  }

  const body = await readFile(filePath);
  const filename = ingestFilenameFromPath(filePath);
  const ext = filename.includes(".") ? filename.split(".").pop()! : "bin";
  const library = await AssetLibrary.create();
  const asset = await library.ingest({
    projectSlug: project,
    entitySlug: entity,
    type: type as "image",
    filename,
    body,
    contentType: `application/octet-stream`,
    tags: ingestTagsForFilename(filename),
    metadata: { filename, source_ext: ext },
  });
  console.log(JSON.stringify(asset, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
