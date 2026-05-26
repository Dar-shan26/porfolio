const STATUS_STYLES = {
  Completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  Concept: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  Planned: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  "In Progress": "border-violet-400/40 bg-violet-400/10 text-violet-200",
  "Coming Soon": "border-amber-400/40 bg-amber-400/10 text-amber-200",
};

export type ProjectStatus = keyof typeof STATUS_STYLES;

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}
