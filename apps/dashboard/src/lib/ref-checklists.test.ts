import { describe, expect, it } from "vitest";
import { REF_CHECKLIST, TEASER1_CHECKLIST } from "./ref-checklists";
import { ingestTagsForFilename } from "./ingest-tags";

describe("ref checklists", () => {
  it("keeps Wave 1 gate at 13 and Teaser 1 additive at 9", () => {
    expect(REF_CHECKLIST).toHaveLength(13);
    expect(TEASER1_CHECKLIST).toHaveLength(9);
  });

  it("uses distinct naming conventions with no overlap", () => {
    for (const name of REF_CHECKLIST) {
      expect(name).toMatch(/^\d{2}_/);
    }
    for (const name of TEASER1_CHECKLIST) {
      expect(name.startsWith("teaser1_")).toBe(true);
    }
    const overlap = REF_CHECKLIST.filter((n) =>
      (TEASER1_CHECKLIST as readonly string[]).includes(n)
    );
    expect(overlap).toEqual([]);
  });
});

describe("ingestTagsForFilename", () => {
  it("tags teaser1 vs ref_pack", () => {
    expect(ingestTagsForFilename("teaser1_eyes_hero.png")).toEqual([
      "dashboard_upload",
      "teaser1",
    ]);
    expect(ingestTagsForFilename("01_hero_portrait.png")).toEqual([
      "dashboard_upload",
      "ref_pack",
    ]);
  });
});
