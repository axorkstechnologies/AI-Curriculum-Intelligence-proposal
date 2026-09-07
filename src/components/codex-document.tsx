import type { ReactNode } from "react";
import { PromptVault } from "@/components/prompt-vault";
import { PitchScript } from "@/components/pitch-script";

const layers = [
  ["01", "Curriculum graph", "Syllabus nodes, prerequisites, CLOs/PLOs, Bloom, command words, paper/AO mapping, textbook edition anchors."],
  ["02", "Calendar service", "Term dates, holidays, exam/mocks, co-curricular, Friday/assembly, weather make-up. Locked windows vs movable topics."],
  ["03", "Staff & section registry", "Who teaches what, parallel sections, ability bands, named substitutes, lab constraints."],
  ["04", "Coverage ledger", "Taught / deferred / at-risk per CLO. Source of truth for HOD. Updated weekly, not rumoured."],
  ["05", "Planner compiler", "Year → term → week → period. Every lesson: command-word objectives, timings that sum to the period, AfL, close, homework."],
  ["06", "Absence rebalancer", "Constraint pass: locked dates hold, practicals need labs, CLO coverage is non-negotiable, teacher load stays sane. Proposes; human approves."],
  ["07", "Differentiation engine", "Three bands by default. Language support. Stretch that is not just 'do more questions'."],
  ["08", "Assessment sampler", "Command-word mix and AO weights that match the real paper, including in years with no public exam."],
  ["09", "Document renderer", "Teacher pack, cover pack, HOD week sheet, inspection file. Export always available."],
  ["10", "Human review loop", "Teacher edit is the gold. Edits fine-tune local memory. Cadence never silently overwrites judgement."],
];

export function CodexDocument() {
  return (
    <article className="mx-auto max-w-3xl text-codex-fg">
      <header className="border-b border-codex-line pb-10 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-codex-muted">
          <span>CAD-2026-X</span>
          <span>Restricted — do not circulate</span>
          <span>Founder copy</span>
        </div>
        <p className="mt-12 font-sans text-xs uppercase tracking-[0.22em] text-faint">Architecture codex</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,4.8rem)] font-medium leading-[0.95] text-codex-fg">
          Do not share this file.
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[17px] leading-relaxed text-codex-muted">
          This is the memory of the system: pipelines, constraints, moat, commercial shape,
          talking script, and the two master prompts. The institutional brief on the other
          tab is what a principal is allowed to hold. If a school can rebuild Cadence from
          a PDF, the PDF was too generous. This one is allowed to be precise because it
          stays here.
        </p>
      </header>

      <CodexSection kicker="A — What you are actually selling">
        <p>
          You are not selling lesson plans. You are selling a maintained institutional
          memory of the year. Generation is the commodity. Calibration is the product.
          Absence-rebalancing under locked exam windows is the demonstration that generic
          AI cannot copy in a weekend.
        </p>
        <p>
          Positioning sentence, memorise it: <em className="text-codex-fg">Cadence is a
          curriculum operating layer, calibrated to this school, that plans, paces, and
          rebalances teaching so coverage and exam windows survive contact with reality.</em>
        </p>
        <p>
          Never say “we’ll just use GPT.” Never send architecture diagrams. Never quote
          day-rates that make it look cheaper than a coordinator’s salary. Always talk
          hours returned, inspection coherence, and the two-week workshop that only you
          can run.
        </p>
      </CodexSection>

      <CodexSection kicker="B — System layers">
        <ol className="space-y-3">
          {layers.map(([n, t, d]) => (
            <li key={n} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border border-codex-line bg-codex-2 px-4 py-3">
              <span className="font-mono text-xs text-codex-muted">{n}</span>
              <div>
                <p className="font-sans text-sm font-medium">{t}</p>
                <p className="mt-1 font-serif text-[14px] leading-relaxed text-codex-muted">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </CodexSection>

      <CodexSection kicker="C — Curriculum ingestion pipeline">
        <ol className="list-decimal space-y-3 pl-5 font-serif text-[16px] leading-relaxed text-codex-muted">
          <li>
            <span className="text-codex-fg">Collect.</span> Schemes of work, current textbook
            editions, official syllabus PDFs, academic calendar, timetable, assessment
            policy, last year’s planners (even the messy ones), past papers where they exist.
          </li>
          <li>
            <span className="text-codex-fg">Parse.</span> Structure into the graph. Human
            does not type the graph; software proposes, HOD confirms. Wrong parsing is
            cheaper than wrong pedagogy.
          </li>
          <li>
            <span className="text-codex-fg">Workshop.</span> This is the moat. Two weeks,
            in person preferred. You mark locked windows, name the real ability bands,
            kill phantom CLOs, and agree what “taught” means. Output: Calibration Dossier
            v1.0, in language a principal can read.
          </li>
          <li>
            <span className="text-codex-fg">Freeze.</span> Term v1.0 is versioned. Teachers
            see drafts, not a moving target. Nightly jobs watch for CAIE/national updates;
            they never auto-publish into a live term.
          </li>
          <li>
            <span className="text-codex-fg">Compile.</span> Term plans, then weeks, then
            lessons. Evaluation suite must pass before a pack reaches a teacher: timings
            sum, command word present, Bloom tagged, three bands present, no empty AfL.
          </li>
          <li>
            <span className="text-codex-fg">Live.</span> Weekly coverage check-in (two
            taps: taught / slipped). Absence events open a rebalance proposal. Human
            approves. Cover pack emits within a working day, target 48 hours.
          </li>
        </ol>
      </CodexSection>

      <CodexSection kicker="D — Absence rebalancer, conceptually">
        <p>
          Treat it as a constrained rescheduler, not as “ask the model to shuffle weeks.”
        </p>
        <ul className="mt-4 space-y-2 font-serif text-[16px] leading-relaxed text-codex-muted">
          <li>— Hard constraints: locked assessment windows, lab/room capacity, statutory holidays, teacher contract load.</li>
          <li>— Soft constraints: keep practicals near their theory, avoid compressing two high-Bloom lessons into one period, prefer retrieval cover over new content when the substitute is weak.</li>
          <li>— Objective: minimise CLO risk before the next locked date. Not “cover as many pages as possible.”</li>
          <li>— Output: a diff the HOD can approve in five minutes, plus cover packs, plus a note to parents only if the school policy wants one.</li>
        </ul>
        <p className="mt-4">
          Implementation options, in order of sanity: (1) rule engine + ILP/CP-SAT for the
          shuffle, LLM only to write the packs from the new sequence; (2) LLM proposes
          sequence, rules validate. Never the reverse. Models are eloquent and weak at
          calendars.
        </p>
      </CodexSection>

      <CodexSection kicker="E — Suggested stack (you may change this; do not print it)">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left font-sans text-sm">
            <tbody>
              {[
                ["Interface", "Web app, Google Workspace sign-in for teachers. Mobile-usable cover packs. Print CSS for paper-first HODs."],
                ["API", "Node or FastAPI. School tenancy hard-isolated. No student PII in prompts."],
                ["Store", "Postgres for graph + ledger + versions. Object store for packs. Vector index only over school-approved curriculum text."],
                ["Models", "Strong general model for drafting. Your gold-set of CAIE-aligned lessons for evaluation. Optional later: small local model for offline campuses."],
                ["Prompt registry", "Versioned prompts, separate from app releases. Rollback prompts without redeploying the site."],
                ["Eval", "Golden pack suite: command-word presence, period-length, band count, AO mix, no hallucinated syllabus codes."],
                ["CI/CD", "GitHub Actions → staging (one pilot school) → production. Prompt eval is a required check. Canary a department before a campus."],
                ["Observability", "Structured logs, pack_id, prompt_version, school_id. Redact content in third-party tools."],
                ["Residency", "Prefer a region the school will accept (PK / GCC / EU). Contract first, then architecture."],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-codex-line">
                  <td className="py-3 pr-4 font-medium whitespace-nowrap">{k}</td>
                  <td className="py-3 text-codex-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CodexSection>

      <CodexSection kicker="F — Moat, written so you do not give it away">
        <ol className="list-decimal space-y-3 pl-5 font-serif text-[16px] leading-relaxed text-codex-muted">
          <li>
            <span className="text-codex-fg">Lived CAIE judgement.</span> Four codes, 72% A/B,
            a resource library already adopted school-wide. A vendor who has not marked a
            9618 paper will ship topic-shaped objectives. You will catch that in review
            without trying.
          </li>
          <li>
            <span className="text-codex-fg">Calibration workshop as paid gate.</span> They
            cannot skip to “just build it.” The dossier is produced by you, on their
            materials, in their rooms. A software house receiving only the public brief
            will build MagicSchool with a crest.
          </li>
          <li>
            <span className="text-codex-fg">Hosted operating layer vs exportable packs.</span>{" "}
            School owns source curriculum and every approved pack. They do not leave with
            the rebalancer, the eval suite, or the command-word compiler. This is fair, and
            you should say it in the brief (you already did, in softer language).
          </li>
          <li>
            <span className="text-codex-fg">Change management.</span> HODs, reluctant heads
            of primary, cover-teacher culture, parent WhatsApp. That is most of the work.
            Anyone selling “an app” will die in week three.
          </li>
          <li>
            <span className="text-codex-fg">Annual syllabus refresh.</span> CAIE and national
            documents move. The school will not want to re-prompt a chatbot every August.
            That retainer is the business.
          </li>
        </ol>
      </CodexSection>

      <CodexSection kicker="G — Commercial shape (internal ranges, not offers)">
        <p>
          Quote hours returned, then price. Do not lead with PKR. After they nod at the
          hours, a Karachi premium Cambridge campus can typically bear:
        </p>
        <ul className="mt-3 space-y-2 font-serif text-[16px] leading-relaxed text-codex-muted">
          <li>— Discovery / calibration: a serious five-figure PKR fee (think coordinator-weeks, not “free demo”). Non-refundable. They are buying your attention and a dossier.</li>
          <li>— 90-day pilot: larger, scoped to two year groups. Includes training, packs, HOD dashboard, two absence drills (simulate one if nobody falls ill).</li>
          <li>— Annual campus licence + refresh: the number that funds you to keep the graph honest. Per extra department, a step-up, not a full second build.</li>
        </ul>
        <p className="mt-4">
          If they ask for source code: no. If they ask for a white-label so their IT team
          can “take it from here”: no, unless the cheque is an acquisition. If they want a
          government RFP later, the public brief is already written at that register; you
          add procurement language, you do not add architecture.
        </p>
      </CodexSection>

      <CodexSection kicker="H — If they try to clone you">
        <p>They will. Your reply, calm:</p>
        <blockquote className="mt-4 border-l-2 border-rule pl-4 font-serif text-[17px] leading-relaxed text-codex-fg">
          “You can generate lessons this afternoon. You cannot generate a year that still
          lands on the right paper if three teachers were absent in February. That is the
          work, and it starts with the calibration, which I run.”
        </blockquote>
        <p className="mt-4">
          Then offer to shorten discovery, not to hand over a spec. If IT insists on a
          build-vs-buy memo, give them the comparison table from the brief and the NFER
          25-minute figure. That memo already says buy.
        </p>
      </CodexSection>

      <CodexSection kicker="I — Eight-minute pitch">
        <PitchScript />
      </CodexSection>

      <CodexSection kicker="J — Master prompts (for regenerating the two PDFs)">
        <p className="mb-6">
          These are for you, later, in any strong model. They reconstruct the documents.
          They are not for schools. Paste as a single message. Attach your CV.
        </p>
        <PromptVault />
      </CodexSection>

      <p className="mt-16 border-t border-codex-line pt-6 font-sans text-xs leading-relaxed text-codex-muted">
        CAD-2026-X · Architecture Codex · Founder eyes only · Pin CAIE2210 · Destroy paper
        copies after use · Do not mail, WhatsApp, or upload this tab’s contents to a school
        shared drive.
      </p>
    </article>
  );
}

function CodexSection({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <section className="mt-14 border-t border-codex-line pt-8">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-codex-muted">{kicker}</p>
      <div className="mt-4 space-y-4 font-serif text-[16px] leading-relaxed text-codex-muted [&_em]:italic">
        {children}
      </div>
    </section>
  );
}
