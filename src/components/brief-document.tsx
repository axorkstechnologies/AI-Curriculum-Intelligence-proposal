import type { ReactNode } from "react";
import { RoiCalculator } from "@/components/roi-calculator";
import { WorkedExample } from "@/components/worked-example";
import { sources } from "@/lib/content/sources";

const toc = [
  { id: "memo", n: "00", label: "Executive memo" },
  { id: "problem", n: "01", label: "The hours we do not count" },
  { id: "trap", n: "02", label: "The generic-AI trap" },
  { id: "what", n: "03", label: "What Cadence is" },
  { id: "example", n: "04", label: "A fortnight that still lands" },
  { id: "outcomes", n: "05", label: "Institutional outcomes" },
  { id: "roi", n: "06", label: "Time returned" },
  { id: "why-not-diy", n: "07", label: "Why this cannot be prompted" },
  { id: "founder", n: "08", label: "Why this founder" },
  { id: "engage", n: "09", label: "How we work together" },
  { id: "ask", n: "10", label: "The ask" },
  { id: "sources", n: "11", label: "Sources" },
];

export function BriefDocument({ showCover = true }: { showCover?: boolean }) {
  return (
    <article className="mx-auto max-w-3xl">
      {showCover ? <Cover /> : null}
      {showCover ? <nav className="no-print mt-10 border-y border-line py-5">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-faint">Contents</p>
        <ol className="mt-4 grid gap-1 sm:grid-cols-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-3 rounded-sm py-1.5 font-sans text-sm text-ink-soft hover:bg-paper-2 hover:text-ink"
              >
                <span className="tabular-nums text-faint">{item.n}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav> : null}

      <Section id="memo" kicker="00 — For the principal, in one page">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Teachers are spending the profession’s scarcest resource on reconstructing the year.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            Primary and middle-years teachers in this country do not enjoy the quiet luxury of
            a frozen syllabus. Schemes of work move. Textbooks densify. Calendars lose a
            quarter of the year to holidays, exams and co-curricular days. Every term, the
            same professional act is repeated: rebuild the planner, rewrite the lessons, hope
            the coverage holds if someone is ill.
          </p>
          <p>
            OECD TALIS finds that lesson planning alone accounts for roughly one-seventh of a
            teacher’s working time — about 6.5 hours in the last comparable weekly breakdown,
            and still 14% in TALIS 2024. In Pakistan those hours mostly happen after the bell,
            on a laptop opened at five or six in the evening. That is not “preparation.” That
            is the school’s instructional design, often completed quietly, alone, and late.
          </p>
          <p>
            Generic AI looks like a rescue and is not. A UK randomised trial found ChatGPT
            saved twenty-five minutes a week on a slice of science planning, with no gain in
            lesson quality. Gallup finds that teachers who use AI every week can recover nearly
            six hours — but only when the tool is actually in the workflow, every week, for
            real tasks. A chatbot with no school calendar, no mixed-ability bands, and no
            Cambridge command words will not become that workflow.
          </p>
          <p>
            Cadence is not another LMS, and it is not a website rebuild. It is a curriculum
            intelligence layer, calibrated to this school, that plans, paces, and rebalances
            teaching so that coverage, CLOs, and exam windows survive contact with reality.
            Teachers get the hours back. Leadership gets a ledger. Students get lessons that
            were designed on purpose.
          </p>
          <p className="font-medium text-ink">
            The ask is a 90-day pilot on two year groups, preceded by a two-week calibration
            workshop led in person by Muhammad Mujahid — Cambridge CS & ICT educator,
            four CAIE codes, 72% A/B across four consecutive cohorts.
          </p>
        </div>
      </Section>

      <Section id="problem" kicker="01 — The hours we do not count">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Higher-secondary teachers can freeze a file. Primary and middle teachers cannot.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            An A-Level specialist can, in a stable year, teach from a set of notes that has
            already met the paper. A Year 4 or Year 7 teacher cannot. The curriculum is
            revised, the textbook is overloaded relative to the scheme of studies, the class
            is mixed-ability, and the week is punctured by sports days, mock windows, and
            colleagues on leave. Research on Pakistan’s Single National Curriculum textbooks
            estimates that 25–30% of the teaching year is already gone before a teacher
            writes a single learning objective.
          </p>
          <p>
            World Bank SABER work on Punjab recorded that more than 90% of statutory teacher
            time is defined as teaching — with no formal allocation for planning, mentoring,
            or instructional improvement. The planning still happens. It is simply pushed into
            the evening, where it competes with copies, WhatsApp groups, and family. The
            Express Tribune’s 2024 reporting on teacher days in Pakistan is not an anecdote.
            It is the operating system.
          </p>
          <p>
            Teachers in this founder’s own network have asked, privately, to pay someone to
            write their lesson plans. That request is the market speaking. It is also an
            indictment. When professionals are willing to buy back their own evenings, the
            institution has a design problem, not a motivation problem.
          </p>
        </div>
        <blockquote className="mt-8 border-l-2 border-steel pl-5 font-serif text-[18px] leading-relaxed text-ink">
          “A school that spends half a teacher’s design time on reconstructing last year’s
          planner is not a school short of talent. It is a school spending talent on a
          problem that should have been solved once, then kept alive.”
        </blockquote>
      </Section>

      <Section id="trap" kicker="02 — The generic-AI trap">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Efficiency without the school inside it is just faster mediocrity.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            Teachers already use ChatGPT. The current evidence points to the same practical
            divide: generic tools are useful for summarising and drafting plans, but not for
            replacing assessment or professional judgement. That is rational. A public model
            will write a lesson on “the digestive system.” It will
            not know that this campus lost two practicals to a lab clash, that Week 13 is a
            locked checkpoint, that the mid-year paper must still sample AO2, or that the
            cover teacher on Tuesday has never taught Science.
          </p>
          <p>
            The NFER/EEF trial is the honest number for generic tools: about 25 minutes a
            week, quality unchanged. The Gallup/Walton number — 5.9 hours, six weeks a year —
            is the number for teachers who put AI into the weekly workflow. The gap between
            those two figures is not “a better prompt.” It is institutionalisation: calendar,
            curriculum, coverage, and habit.
          </p>
          <p>
            A school that simply lets teachers use AI has created private, uneven workflows.
            Every teacher becomes a prompt engineer with a different level of support.
            Leadership cannot see the work, and a substitute cannot inherit it. When the teacher
            is absent, the chatbot does not move the topic to next week. It simply was not asked.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto print-avoid">
          <table className="w-full min-w-[32rem] border-collapse text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-rule text-[11px] uppercase tracking-[0.14em] text-faint">
                <th className="py-2 pr-3 font-medium">Capability</th>
                <th className="py-2 pr-3 font-medium">ChatGPT / generic tools</th>
                <th className="py-2 font-medium">Cadence, calibrated</th>
              </tr>
            </thead>
            <tbody className="text-ink-soft">
              {[
                ["This school’s calendar & exam windows", "No", "Yes — locked dates hold"],
                ["Live coverage ledger for the HOD", "No", "Yes — taught / deferred / at risk"],
                ["Absence rebalance without dropping CLOs", "No", "Yes — with cover packs"],
                ["Cambridge command words & AOs", "If the teacher remembers", "Default, from the syllabus"],
                ["Bloom + CLOs/PLOs on every lesson", "Optional", "Required"],
                ["Differentiation across ability bands", "A second prompt", "Three-band pack"],
                ["Inspection-ready audit trail", "Chat history", "Term ledger"],
                ["Time recovered, published evidence", "~25 min/week (NFER)", "Built for weekly institutional use"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-line">
                  <td className="py-3 pr-3 font-medium text-ink">{a}</td>
                  <td className="py-3 pr-3">{b}</td>
                  <td className="py-3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="what" kicker="03 — What Cadence is (and is not)">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          A curriculum operating layer. Not a chatbot with a school logo.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            Cadence sits above the tools the school already uses. It does not ask you to
            migrate an LMS, rebuild a website, or abandon Google Workspace. It takes the
            school’s actual curriculum — schemes of work, textbook editions, academic
            calendar, assessment windows, timetable realities — and keeps a living plan of
            the year.
          </p>
        </div>
        <ul className="mt-6 space-y-3">
          {[
            {
              t: "Term that still closes",
              d: "A year-plan that knows holidays, mocks, co-curricular days, and the date past-paper or revision must begin — including in years that do not sit CAIE.",
            },
            {
              t: "Lessons that know why they exist",
              d: "Every period carries command-word objectives, Bloom level, course/programme learning outcomes (CLOs/PLOs), timed activities, assessment for learning (AfL), and a close. Objectives are not topics. “Acids and bases” is a topic. “Distinguish strong and weak acids using pH evidence” is a lesson.",
            },
            {
              t: "Coverage that can be seen",
              d: "Teachers and coordinators see what has been taught, what remains, and when the dangerous squeeze begins. Innovation time is protected because the administrative reconstruction is no longer the job.",
            },
            {
              t: "Absence that does not erase a CLO",
              d: "If a teacher is out for a week, topics move. Locked windows do not. Substitutes receive a pack. The returning teacher inherits a ledger, not folklore.",
            },
            {
              t: "Differentiation that is default",
              d: "Three ability bands, not a hopeful stretch task added at 11pm. Primary and middle classrooms in this country are mixed. The plan should admit that.",
            },
            {
              t: "Human agency, by design",
              d: "UNESCO is explicit: teachers are not to be replaced. Cadence drafts; the teacher edits; the edit teaches the system. Judgement stays in the classroom.",
            },
          ].map((item) => (
            <li key={item.t} className="rounded-lg border border-line bg-paper-3 px-4 py-4">
              <p className="font-sans text-sm font-medium text-ink">{item.t}</p>
              <p className="mt-1 font-serif text-[15px] leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-serif text-[17px] leading-[1.65] text-ink-soft">
          What we will not do: build you a second school information system, scrape student
          data into a public model, or sell “AI” as a substitute for a department head. The
          product is teaching time, coverage integrity, and a standard of planning that would
          survive a Cambridge inspection unembarrassed.
        </p>
      </Section>

      <Section id="example" kicker="04 — A fortnight that still lands">
        <WorkedExample />
      </Section>

      <Section id="outcomes" kicker="05 — What the school actually buys">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Not features. A change in how the year behaves.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              k: "For teachers",
              items: [
                "Evenings returned — planning ceases to be a second unpaid shift",
                "A plan that already knows this week’s constraints",
                "Permission to spend the recovered hours on feedback, labs, and actual pedagogy",
              ],
            },
            {
              k: "For heads of department",
              items: [
                "One coverage picture instead of seven versions of a spreadsheet",
                "Schemes that stay aligned across parallel sections",
                "A professional conversation about learning, not about who forgot the planner",
              ],
            },
            {
              k: "For school leadership",
              items: [
                "A serious answer to teacher workload that is not “try harder”",
                "Inspection and parent-facing coherence",
                "AI adopted as policy, not as 40 private ChatGPT habits",
              ],
            },
            {
              k: "For students",
              items: [
                "Lessons sequenced on purpose, including after disruption",
                "Command words practised in class, not discovered in the exam hall",
                "Teachers who still have the energy to notice them",
              ],
            },
          ].map((col) => (
            <div key={col.k} className="border-t border-rule pt-4">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-faint">{col.k}</p>
              <ul className="mt-3 space-y-2 font-serif text-[15px] leading-relaxed text-ink-soft">
                {col.items.map((item) => (
                  <li key={item} className="pl-4 -indent-4">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="roi" kicker="06 — Time returned">
        <RoiCalculator />
      </Section>

      <Section id="why-not-diy" kicker="07 — Why this cannot be prompted into existence">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Anyone can generate a lesson. Almost no one can generate a term.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            If this brief is handed to a general contractor or pasted into a public model, the
            school will receive a chatbot that writes lesson plans. That is the easy third of
            the problem, and it is the third the NFER trial already measured: small time
            savings, no quality lift, no institutional memory.
          </p>
          <p>
            The valuable work is not generation. It is calibration. Someone has to sit with
            the HOD, read the actual scheme, mark the locked dates, name the three ability
            bands this campus really has, and decide what “done” means for a CLO. Someone has
            to know that Cambridge markers reward command words and punish topic-shaped
            objectives. Someone has to refuse a plan that looks complete and is pedagogically
            empty.
          </p>
          <p>
            That work does not live in a prompt. It lives in a practice. The school’s mapped
            year becomes a maintained asset: versioned when CAIE or the national scheme
            updates, rebalanced when staff are absent, reviewed by teachers rather than
            imposed on them. Leave with your lesson packs whenever you wish. The operating
            layer — pacing, coverage, command-word fidelity, absence logic — is the
            partnership.
          </p>
          <p>
            UNESCO’s guidance is the policy backdrop a serious school will eventually be
            asked about: data protection, human agency, teacher competency, not “we let
            staff use ChatGPT.” Cadence is designed so leadership can answer that question
            without wincing.
          </p>
        </div>
      </Section>

      <Section id="founder" kicker="08 — Why this founder">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          A software engineer who has already been the teacher you are trying to help.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            Muhammad Mujahid is a Cambridge-specialist CS and ICT educator with four-plus
            years of board-exam impact in Karachi. He has prepared 150+ students across
            O-Level, IGCSE and A-Level, and sustained a 72% A/B rate across four consecutive
            CAIE cohorts, with a peak of 77%. He is qualified across four CAIE codes: O-Level CS 2210,
            O-Level ICT 0417, IGCSE CS 0478, A-Level CS 9618.
          </p>
          <p>
            He is also a software engineer. BSE, Bahria University; capstone as front-end
            lead on a full-stack learning platform. Microsoft Innovative Educator Expert,
            2025. He has authored a school-wide Cambridge-aligned resource library — lesson
            packs, revision guides, lab worksheets, mocks — that was adopted across year
            groups. Teachers have asked him to write their lesson plans. The demand is not
            hypothetical.
          </p>
          <p>
            This combination is the reason to commission him rather than a vendor who has
            read a syllabus PDF. He has written the planners and knows which AI output a
            Cambridge HOD will reject quickly. The implementation is mostly pedagogy and
            change management. The software is how that pedagogy stays alive after the
            workshop ends.
          </p>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {[
            ["150+", "students exam-ready"],
            ["72%", "A/B, four cohorts"],
            ["4", "CAIE codes taught"],
            ["MIEE", "Expert, 2025"],
          ].map(([v, k]) => (
            <div key={k} className="bg-paper px-3 py-4 sm:px-4">
              <dt className="font-display text-2xl text-ink sm:text-3xl">{v}</dt>
              <dd className="mt-1 font-sans text-xs text-muted">{k}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="engage" kicker="09 — How we work together">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          A calibration, a pilot, then a year that stays honest.
        </h2>
        <ol className="mt-8 space-y-6">
          {[
            {
              n: "01",
              t: "Discovery workshop — two weeks",
              d: "Leadership interview, HOD mapping, calendar freeze, scheme ingestion, ability-band definition. Paid, finite, and the only way the system learns this school. Output: a calibration dossier the school can read in plain language.",
            },
            {
              n: "02",
              t: "90-day pilot — two year groups, one department",
              d: "Term planner, weekly schemes, daily lessons, cover packs, HOD ledger. Teachers edit; those edits refine the workflow. We measure hours returned, coverage integrity, and teacher willingness to continue — not vanity dashboards.",
            },
            {
              n: "03",
              t: "Institutional rollout",
              d: "Adjacent departments, coordinator training, parent-communication templates, inspection file. Expansion only after the pilot has earned it.",
            },
            {
              n: "04",
              t: "Annual refresh",
              d: "Syllabus updates, new textbook editions, staff changes, next year’s calendar. This is the relationship, not a hostage clause. The school always owns its source curriculum and can export every pack it has approved.",
            },
          ].map((step) => (
            <li key={step.n} className="grid grid-cols-[3rem_1fr] gap-4">
              <span className="font-display text-xl text-faint">{step.n}</span>
              <div>
                <p className="font-sans text-base font-medium text-ink">{step.t}</p>
                <p className="mt-1 font-serif text-[15px] leading-relaxed text-muted">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-lg border border-line bg-paper-3 px-5 py-5">
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-faint">Governance</p>
          <p className="mt-2 font-serif text-[15px] leading-relaxed text-ink-soft">
            Student personal data is not required for planning intelligence and will not be
            ingested. School curriculum materials stay in a school-controlled space.
            Teachers remain authors of record. UNESCO’s human-centred conditions — agency,
            privacy, professional competence — are treated as design constraints, not
            brochure language. A data-processing note is part of the pilot agreement, not an
            afterthought.
          </p>
        </div>
      </Section>

      <Section id="ask" kicker="10 — The ask">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
          Commission the calibration. Judge us on a term, not a demo.
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft">
          <p>
            We are asking this school to name two year groups and one department, appoint a
            counterpart (Principal, Academic Coordinator, or HOD), and sit the two-week
            calibration. Investment is scoped in that conversation against the hours the
            model above returns — not against the price of a website.
          </p>
          <p>
            Success in 90 days looks like this: teachers report a material drop in evening
            reconstruction; the HOD can show coverage without opening seven inboxes; at least
            one genuine absence has been rebalanced without a CLO being silently dropped;
            leadership can explain the school’s AI practice in a sentence that would satisfy
            a visiting inspector.
          </p>
          <p>
            If those conditions are not met, the pilot ends and the school keeps every pack
            it approved. If they are met, we have earned the year.
          </p>
        </div>
        <div className="mt-8 border-t border-rule pt-6">
          <p className="font-display text-xl text-ink">Muhammad Mujahid</p>
          <p className="mt-1 font-sans text-sm text-muted">
            Cambridge CS & ICT Educator · O-Level · IGCSE · A-Level · MIEE 2025
          </p>
          <p className="mt-3 font-sans text-sm text-ink-soft">
            <a
              className="rounded-sm underline decoration-line underline-offset-4 hover:text-ink"
              href="tel:+923082789210"
            >
              +92 308 2789210
            </a>
            <span aria-hidden="true"> · </span>
            <a
              className="rounded-sm underline decoration-line underline-offset-4 hover:text-ink"
              href="mailto:muhammad.mujahid.dev@gmail.com"
            >
              muhammad.mujahid.dev@gmail.com
            </a>
            <br />
            <a
              className="rounded-sm underline decoration-line underline-offset-4 hover:text-ink"
              href="https://linkedin.com/in/muhammad-mujahid-dev"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/muhammad-mujahid-dev
            </a>
            <span aria-hidden="true"> · </span>
            Karachi
          </p>
        </div>
      </Section>

      <Section id="sources" kicker="11 — Sources cited">
        <ol className="space-y-4">
          {sources.map((s, i) => (
            <li key={s.id} className="grid grid-cols-[2rem_1fr] gap-2">
              <span className="font-sans text-sm tabular-nums text-faint">{i + 1}.</span>
              <div>
                <p className="font-sans text-sm font-medium text-ink">{s.cite}</p>
                <p className="mt-1 font-serif text-[14px] leading-relaxed text-muted">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-sans text-xs leading-relaxed text-faint">
          Document CAD-2026-01 · Institutional Brief · Prepared for school leadership · Not a
          software specification · Figures from published studies are attributed; school-level
          impact figures (72% A/B, 150+ students, four codes) are the founder’s recorded
          teaching outcomes · Illustrative Year 6 scenario is labelled as such and is not a
          completed client case.
        </p>
      </Section>
    </article>
  );
}

function Cover() {
  return (
    <header className="border-b border-rule pb-10 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-faint">
        <span>CAD-2026-01</span>
        <span>For school leadership</span>
        <span>Karachi · 2026</span>
      </div>
      <p className="mt-12 font-sans text-xs uppercase tracking-[0.22em] text-steel">
        Institutional brief
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink">
        Cadence
      </h1>
      <p className="mt-4 max-w-xl font-display text-2xl font-medium leading-snug text-ink-soft sm:text-3xl">
        Return the hours that lesson planning stole.
      </p>
      <p className="mt-6 max-w-2xl font-serif text-[17px] leading-relaxed text-muted">
        Curriculum intelligence for Cambridge and national-curriculum schools — calibrated to
        your year, your calendar, and the teachers who actually have to teach it. Not an LMS.
        Not a chatbot. A way for the term to survive contact with absence, mixed ability, and
        a syllabus that will not sit still.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm font-medium">
        <a
          href="#engage"
          className="inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-paper hover:opacity-90"
        >
          See the pilot model
        </a>
        <a
          href="#roi"
          className="inline-flex min-h-11 items-center rounded-md border border-rule bg-paper-3 px-4 text-ink hover:bg-paper-2"
        >
          Estimate time returned
        </a>
      </div>
      <dl className="mt-10 grid gap-px border-y border-rule bg-line sm:grid-cols-3">
        {[
          ["90 days", "Pilot period"],
          ["2 year groups", "Initial scope"],
          ["1 department", "Calibrated start"],
        ].map(([value, label]) => (
          <div key={label} className="bg-paper px-4 py-4 sm:px-5">
            <dt className="font-sans text-xs uppercase tracking-[0.14em] text-faint">{label}</dt>
            <dd className="mt-1 font-display text-2xl text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-10 flex flex-col gap-1 font-sans text-sm text-ink-soft">
        <span>Prepared by Muhammad Mujahid</span>
        <span>Cambridge CS & ICT Educator · MIEE 2025</span>
      </div>
    </header>
  );
}

function Section({
  id,
  kicker,
  children,
}: {
  id: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-32 border-t border-line pt-10">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-faint">{kicker}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}
