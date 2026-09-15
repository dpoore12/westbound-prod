import { describe, expect, it } from "vitest";
import {
  ingestFilenameFromPath,
  ingestTagsForFilename,
} from "./cli/ingest-filename.js";

describe("ingestFilenameFromPath", () => {
  it("preserves basename instead of upload.ext", () => {
    expect(
      ingestFilenameFromPath("docs/dan-ref-intake/teaser1_eyes_hero.png")
    ).toBe("teaser1_eyes_hero.png");
    expect(ingestFilenameFromPath("/tmp/01_hero_portrait.png")).toBe(
      "01_hero_portrait.png"
    );
  });
});

describe("ingestTagsForFilename", () => {
  it("tags teaser1 frames separately from ref_pack", () => {
    expect(ingestTagsForFilename("teaser1_eyes_hero.png")).toEqual([
      "cli_upload",
      "teaser1",
    ]);
    expect(ingestTagsForFilename("01_hero_portrait.png")).toEqual([
      "cli_upload",
      "ref_pack",
    ]);
  });
});
