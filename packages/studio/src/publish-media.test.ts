import { describe, expect, it } from "vitest";
import { resolvePublishMediaUri } from "./publish-media.js";

describe("resolvePublishMediaUri (S3 master hand-off)", () => {
  it("prefers resolveMasterUri over episodeVideoUri", () => {
    expect(
      resolvePublishMediaUri({
        resolveMasterUri: "r2://bucket/master.mov",
        episodeVideoUri: "r2://bucket/episode.mp4",
      })
    ).toBe("r2://bucket/master.mov");
  });

  it("falls back to episodeVideoUri", () => {
    expect(
      resolvePublishMediaUri({ episodeVideoUri: "r2://bucket/episode.mp4" })
    ).toBe("r2://bucket/episode.mp4");
  });

  it("throws when neither URI is present", () => {
    expect(() => resolvePublishMediaUri({})).toThrow(/resolveMasterUri/);
  });
});
