import { useState, type ReactNode } from "react";
import { ArrowRight, CalendarClock, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type Scenario = "steady" | "disrupted";

export function ProposalOverview() {
  const [scenario, setScenario] = useState<Scenario>("disrupted");
  const disrupted = scenario === "disrupted";

  return (
    <section className="no-print" aria-labelledby="proposal-title">
      <div className="hero-panel relative overflow-hidden rounded-xl bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="enter-rise">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-paper/65">
              Curriculum intelligence for schools
            </p>
            <h1 id="proposal-title" className="mt-5 max-w-3xl font-display text-4xl font-medium leading-none tracking-tight sm:text-6xl">
              A curriculum plan that survives the school week.
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-paper/75 sm:text-xl">
              Cadence turns a school’s calendar, scheme of work, and classroom realities into
              teachable plans—with coverage visible, disruptions handled, and teacher judgement protected.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex h-12 items-center rounded-md bg-paper px-5 font-sans text-base font-medium text-ink hover:bg-paper-2" href="#full-brief">
                Explore the proposal <ArrowRight className="ml-2" aria-hidden="true" size={17} />
              </a>
              <a className="inline-flex h-12 items-center rounded-md border border-paper/30 px-5 font-sans text-base font-medium text-paper hover:bg-paper/10" href="#disruption-model">
                See disruption logic
              </a>
            </div>
          </div>

          <div className="enter-rise hero-architecture rounded-lg border border-paper/15 bg-paper/5 p-5 sm:p-6">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-paper/60">The operating layer</p>
            <div className="mt-5 space-y-3">
              <ArchitectureRow icon={<CalendarClock aria-hidden="true" size={18} />} label="School reality" detail="Calendar, exams, timetables, absence" />
              <ArchitectureRow icon={<Layers3 aria-hidden="true" size={18} />} label="Cadence logic" detail="Pacing, coverage, differentiation" />
              <ArchitectureRow icon={<ShieldCheck aria-hidden="true" size={18} />} label="Teaching output" detail="Lessons, cover packs, HOD ledger" />
            </div>
            <p className="mt-5 border-t border-paper/15 pt-4 font-sans text-sm leading-relaxed text-paper/70">
              Not an LMS. Not a chatbot. A maintained operating system for the year.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        <Proof label="Pilot period" value="90 days" detail="Measured against a real term" />
        <Proof label="Initial scope" value="2 year groups" detail="One department, not a demo" />
        <Proof label="Human control" value="Teacher-led" detail="Cadence drafts; teachers decide" />
      </div>

      <div id="disruption-model" className="mt-12 grid gap-8 border-y border-line py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-faint">The test that matters</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            What happens when the plan meets a real school week?
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-muted">
            Toggle the scenario. The point is not faster lesson generation; it is preserving learning objectives when reality changes the timetable.
          </p>
          <div className="mt-6 inline-flex rounded-md border border-line bg-paper-3 p-1">
            <button type="button" className={scenario === "steady" ? "scenario-control scenario-control-active" : "scenario-control"} onClick={() => setScenario("steady")} aria-pressed={scenario === "steady"}>Steady week</button>
            <button type="button" className={disrupted ? "scenario-control scenario-control-active" : "scenario-control"} onClick={() => setScenario("disrupted")} aria-pressed={disrupted}>Teacher absent</button>
          </div>
        </div>
        <div className="scenario-card rounded-lg border border-line bg-paper-3 p-5 sm:p-6" aria-live="polite">
          <div className="flex items-center justify-between gap-4">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-faint">Year 6 science · Weeks 11–16</p>
            <span className={disrupted ? "status-chip status-risk" : "status-chip status-ready"}>{disrupted ? "Rebalanced" : "On pace"}</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Step label="Week 11–12" value={disrupted ? "Cover packs issued" : "Theory sequence"} active={disrupted} />
            <Step label="Week 13" value="Checkpoint holds" active />
            <Step label="Week 16" value="Assessment window holds" active />
          </div>
          <div className="mt-5 flex gap-3 border-t border-line pt-4">
            <CheckCircle2 className="mt-0.5 shrink-0 text-steel" aria-hidden="true" size={19} />
            <p className="font-serif text-base leading-relaxed text-ink-soft">
              {disrupted ? "Two theory lessons move into a rebalanced fortnight. The practical stays in the lab, the checkpoint stays locked, and no CLO is silently dropped." : "The sequence runs as planned, with objectives, assessment and coverage visible before a problem appears."}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-line bg-paper-3 px-6 py-8 text-center sm:px-10">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-faint">Ready for the evidence?</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">See the complete case for a calibrated pilot.</h2>
        <p className="mx-auto mt-3 max-w-2xl font-serif text-lg leading-relaxed text-muted">The full proposal preserves the research, practical model, governance, founder background, ROI model and implementation detail.</p>
        <Button type="button" variant="steel" size="lg" className="mt-6" onClick={() => document.getElementById("full-brief")?.scrollIntoView({ behavior: "smooth" })}>
          Read the complete proposal <ArrowRight aria-hidden="true" size={17} />
        </Button>
      </div>
    </section>
  );
}

function ArchitectureRow({ icon, label, detail }: { icon: ReactNode; label: string; detail: string }) {
  return <div className="flex items-center gap-3 rounded-md border border-paper/10 bg-ink-soft/30 px-4 py-3"><span className="text-paper/70">{icon}</span><div><p className="font-sans text-sm font-medium text-paper">{label}</p><p className="mt-0.5 font-sans text-xs text-paper/60">{detail}</p></div></div>;
}

function Proof({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <div className="bg-paper px-5 py-5 text-left sm:px-6"><p className="font-sans text-xs uppercase tracking-[0.15em] text-faint">{label}</p><p className="mt-2 font-display text-2xl text-ink">{value}</p><p className="mt-1 font-sans text-sm text-muted">{detail}</p></div>;
}

function Step({ label, value, active }: { label: string; value: string; active?: boolean }) {
  return <div className={active ? "timeline-step timeline-step-active" : "timeline-step"}><p className="font-sans text-xs uppercase tracking-[0.14em] text-faint">{label}</p><p className="mt-2 font-sans text-sm font-medium leading-snug text-ink">{value}</p></div>;
}
