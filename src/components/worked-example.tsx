import { useState } from "react";
import { cn } from "@/lib/utils";

type Week = {
  w: number;
  title: string;
  bloom: string;
  locked: boolean;
  absent?: boolean;
};

const base: Week[] = [
  { w: 9, title: "Cells & organisation", bloom: "Understand", locked: false },
  { w: 10, title: "Practical: microscopy", bloom: "Apply", locked: false },
  { w: 11, title: "Nutrients & diet", bloom: "Analyse", locked: false },
  { w: 12, title: "Digestive system", bloom: "Apply", locked: false },
  { w: 13, title: "Formative checkpoint", bloom: "Evaluate", locked: true },
  { w: 14, title: "Respiration intro", bloom: "Understand", locked: false },
  { w: 15, title: "Practical: respiration", bloom: "Apply", locked: false },
  { w: 16, title: "Mid-year paper window", bloom: "Evaluate", locked: true },
];

const rebalanced: Week[] = [
  { w: 9, title: "Cells & organisation", bloom: "Understand", locked: false },
  { w: 10, title: "Practical: microscopy", bloom: "Apply", locked: false },
  { w: 11, title: "Cover pack: retrieval + reading", bloom: "Remember", locked: false, absent: true },
  { w: 12, title: "Cover pack: diet investigation", bloom: "Understand", locked: false, absent: true },
  { w: 13, title: "Formative checkpoint", bloom: "Evaluate", locked: true },
  { w: 14, title: "Nutrients + digestion (compressed)", bloom: "Analyse", locked: false },
  { w: 15, title: "Respiration + practical", bloom: "Apply", locked: false },
  { w: 16, title: "Mid-year paper window", bloom: "Evaluate", locked: true },
];

export function WorkedExample() {
  const [absent, setAbsent] = useState(true);
  const weeks = absent ? rebalanced : base;

  return (
    <section className="print-avoid">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-faint">
            Illustrative scenario — Year 6 Science, Cambridge Lower Secondary
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink">
            A teacher is absent for two weeks. The assessment window does not move.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setAbsent((v) => !v)}
          aria-pressed={absent}
          aria-label={absent ? "Show original pacing" : "Show pacing after a two-week absence"}
          className={cn(
            "h-11 shrink-0 rounded-md px-4 font-sans text-sm font-medium",
            absent ? "bg-ink text-paper" : "border border-rule bg-paper-3 text-ink",
          )}
        >
          {absent ? "Absence on — Weeks 11–12" : "Absence off — original pacing"}
        </button>
      </div>

      <p className="mt-3 max-w-3xl font-serif text-[15px] leading-relaxed text-muted">
        Ms A is out in Weeks 11–12. Checkpoint in Week 13 and the mid-year paper in
        Week 16 are locked. Cadence does not “skip the topic.” It issues a 48-hour
        cover pack, preserves CLOs, compresses two theory weeks after the teacher
        returns, and keeps the practical that needs the lab.
      </p>

      <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {weeks.map((week) => (
          <li
            key={week.w}
            className={cn(
              "rounded-lg border px-3 py-3",
              week.absent
                ? "border-danger/30 bg-danger/5"
                : week.locked
                  ? "border-steel/30 bg-steel/5"
                  : "border-line bg-paper-3",
            )}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-faint">
              Week {week.w}
              {week.locked ? " · locked" : ""}
              {week.absent ? " · cover" : ""}
            </p>
            <p className="mt-1 font-sans text-sm font-medium leading-snug text-ink">{week.title}</p>
            <p className="mt-2 font-sans text-xs text-muted">Bloom · {week.bloom}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Note
          title="What the substitute receives"
          body="Period-length timings, command-word objectives, materials list, AfL check, homework, and what not to invent. Written so a competent cover teacher can land the hour."
        />
        <Note
          title="What the HOD sees"
          body="Coverage ledger: two theory CLOs deferred, checkpoint intact, practical not dropped, Week 16 paper still samples AO1/AO2 as planned. Risk is visible, not rumoured."
        />
        <Note
          title="What the teacher returns to"
          body="A rebalanced fortnight, not a guilt pile. She knows what was covered, what was not, and which two lessons are now compressed rather than skipped."
        />
      </div>
    </section>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-line bg-paper-3 px-4 py-4">
      <p className="font-sans text-sm font-medium text-ink">{title}</p>
      <p className="mt-2 font-serif text-[14px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}
