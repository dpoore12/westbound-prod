/** Resolve the publish media URI; prefer Dan's Logic/Resolve master (S3). */
export function resolvePublishMediaUri(metadata: Record<string, unknown>): string {
  const resolveMasterUri = String(metadata.resolveMasterUri ?? "");
  const episodeVideoUri = String(metadata.episodeVideoUri ?? "");
  if (!resolveMasterUri && !episodeVideoUri) {
    throw new Error(
      "No resolveMasterUri (or episodeVideoUri) on run — upload the mastered file via /review before publish"
    );
  }
  return resolveMasterUri || episodeVideoUri;
}
