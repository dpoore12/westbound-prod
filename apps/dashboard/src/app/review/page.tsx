import { createServerSupabase } from "@/lib/supabase";
import { ReviewActions } from "./review-actions";
import { RefUploadForm } from "./ref-upload-form";
import { MasterUploadForm } from "./master-upload-form";
import { REF_CHECKLIST, TEASER1_CHECKLIST } from "@/lib/ref-checklists";

interface QueueItem {
  id: string;
  title: string;
  kind: string;
  tier: string;
  queue: "sync" | "hero_publish" | "supervisor_outreach" | "ref_intake";
  hasMaster?: boolean;
}

async function loadIntakeStatus(
  checklist: readonly string[]
): Promise<Array<{ filename: string; ingested: boolean }>> {
  const db = createServerSupabase();
  if (!db) {
    return checklist.map((filename) => ({ filename, ingested: false }));
  }

  const { data: projects } = await db
    .from("projects")
    .select("id")
    .eq("slug", "studio")
    .limit(1);
  const projectId = projects?.[0]?.id;
  if (!projectId) {
    return checklist.map((filename) => ({ filename, ingested: false }));
  }

  const { data: assets } = await db
    .from("assets")
    .select("r2_uri, metadata")
    .eq("project_id", projectId);

  return checklist.map((filename) => {
    const ingested = (assets ?? []).some(
      (a) =>
        a.r2_uri.includes(filename) ||
        String((a.metadata as Record<string, unknown>)?.filename ?? "") === filename
    );
    return { filename, ingested };
  });
}

async function loadQueue(): Promise<QueueItem[]> {
  const db = createServerSupabase();
  if (!db) {
    return [
      {
        id: "demo-sync-1",
        title: "Cinematic tense — Sync batch",
        kind: "track",
        tier: "volume",
        queue: "sync",
      },
      {
        id: "demo-hero-1",
        title: "Episode 1 — The Noise",
        kind: "episode",
        tier: "hero",
        queue: "hero_publish",
        hasMaster: false,
      },
    ];
  }

  const items: QueueItem[] = [];

  const { data: tracks } = await db
    .from("tracks")
    .select("id, title, metadata, source")
    .eq("source", "sync")
    .contains("metadata", { curationQueue: true });

  for (const t of tracks ?? []) {
    items.push({
      id: t.id,
      title: t.title,
      kind: "track",
      tier: "volume",
      queue: "sync",
    });
  }

  const { data: runs } = await db
    .from("production_runs")
    .select("id, title, metadata, kind")
    .eq("stage", "dan_review");

  for (const r of runs ?? []) {
    const meta = (r.metadata ?? {}) as Record<string, unknown>;
    items.push({
      id: r.id,
      title: r.title,
      kind: r.kind,
      tier: String(meta.tier ?? "hero"),
      queue: "hero_publish",
      hasMaster: Boolean(meta.resolveMasterUri),
    });
  }

  const { data: outreach } = await db
    .from("supervisor_outreach")
    .select("id, email_draft, supervisor_id")
    .eq("status", "pending_dan_review")
    .limit(20);

  for (const o of outreach ?? []) {
    items.push({
      id: o.id,
      title: `Outreach draft (${String(o.email_draft).slice(0, 40)}…)`,
      kind: "email",
      tier: "volume",
      queue: "supervisor_outreach",
    });
  }

  return items;
}

export default async function ReviewPage() {
  const [items, refStatus, teaserStatus] = await Promise.all([
    loadQueue(),
    loadIntakeStatus(REF_CHECKLIST),
    loadIntakeStatus(TEASER1_CHECKLIST),
  ]);
  const refDone = refStatus.filter((r) => r.ingested).length;
  const teaserDone = teaserStatus.filter((r) => r.ingested).length;

  return (
    <>
      <h1>Review queues</h1>
      <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
        Dan approves sync tracks, hero publishes, and supervisor outreach before
        scheduling.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Queue</th>
            <th>Title</th>
            <th>Tier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.queue}</td>
              <td>{item.title}</td>
              <td>
                <span className={`badge ${item.tier}`}>{item.tier}</span>
              </td>
              <td>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <ReviewActions itemId={item.id} queue={item.queue} />
                  {item.queue === "hero_publish" && (
                    <MasterUploadForm
                      runId={item.id}
                      hasMaster={Boolean(item.hasMaster)}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1rem" }}>
          Ref intake (Dan) — {refDone}/{REF_CHECKLIST.length} complete
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
          Wave 1 gate — numbered 01–13 pack + full credential block.
        </p>
        <ul style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
          {refStatus.map((r) => (
            <li key={r.filename} style={{ color: r.ingested ? "green" : undefined }}>
              {r.ingested ? "✓" : "○"} {r.filename}
            </li>
          ))}
        </ul>
        <h2 style={{ fontSize: "1rem", marginTop: "1.5rem" }}>
          Teaser 1 frames — {teaserDone}/{TEASER1_CHECKLIST.length} complete
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
          Additive Midjourney locks — <strong>not</strong> the Wave 1 credential clock.
        </p>
        <ul style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
          {teaserStatus.map((r) => (
            <li key={r.filename} style={{ color: r.ingested ? "green" : undefined }}>
              {r.ingested ? "✓" : "○"} {r.filename}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.5rem" }}>
          Run <code>pnpm ingest:refs</code> after placing files in{" "}
          <code>docs/dan-ref-intake/</code>, or upload below.
        </p>
        <RefUploadForm />
        <p style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>
          <a href="/login">Dan login</a>
        </p>
      </section>
    </>
  );
}
