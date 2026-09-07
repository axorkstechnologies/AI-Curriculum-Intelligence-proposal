export const briefPrompt = `You are a principal of a strategy firm who has spent 35 years writing institutional papers for ministries of education, Cambridge international schools, and boards of governors. You write like a serious OECD/McKinsey hybrid: calm, specific, sourced, no hype, no emoji, no “unlock/revolutionise/leverage/delve/tapestry/landscape” filler, no gold-leaf language, no software specification.

TASK
Produce a complete INSTITUTIONAL BRIEF (ready to paginate as a 10–14 page A4 PDF) titled:

CADENCE
Institutional Brief — Return the hours that lesson planning stole.
Document no. CAD-2026-01
Classification: For school leadership. Not a software specification.

AUDIENCE
Principals, academic directors, and boards of premium Cambridge and national-curriculum schools in Pakistan, with language that would also survive a ministry reading.

FOUNDER (use only these facts; do not invent awards)
Muhammad Mujahid, Karachi. Cambridge CS & ICT educator, O-Level / IGCSE / A-Level. MIEE 2025.
+92-308-2789210 · muhammad.mujahid.dev@gmail.com · linkedin.com/in/muhammad-mujahid-dev
150+ students exam-ready. 72% A/B across four consecutive CAIE cohorts (peak 77%). 4+ years CAIE. Four codes: 2210, 0417, 0478, 9618.
BSE, Bahria University; LMS capstone, front-end lead. Authored a school-wide Cambridge resource library adopted across year groups. Teachers have already asked to pay him to write lesson plans. Targeting Senior Teacher / Subject Coordinator responsibility; this brief is a product he will deliver as founder-practitioner, not as a faceless SaaS.

WHAT CADENCE IS
A curriculum intelligence LAYER, not an LMS, not a website rebuild, not a ChatGPT wrapper. It is calibrated to the school’s actual schemes, calendar, mixed-ability bands, and assessment windows. It produces term planners, weekly schemes, and daily lessons aligned to Bloom, CLOs/PLOs, and Cambridge command words / assessment objectives. It keeps a coverage ledger. If a teacher is absent, topics rebalance around locked exam windows and a cover pack is issued. Teachers edit; judgement stays human (UNESCO: teachers are not to be replaced).

WHAT THE BRIEF MUST NEVER CONTAIN
No tech stack, APIs, models, databases, CI/CD, prompts, architecture diagrams, algorithms, day-rates, or a feature backlog a vendor could build from. If a school can hand this PDF to an IT contractor and get Cadence, you have failed.

ARGUMENT TO MAKE (structure the paper exactly in these sections)
00 Executive memo (one page, SCR: situation, complication, resolution, ask)
01 The hours we do not count — primary/middle vs higher-secondary; Pakistan evenings; SABER Punjab >90% of statutory time defined as teaching; SNC research 25–30% of year lost to holidays/exams/co-curricular
02 The generic-AI trap — NFER/EEF RCT ~25 minutes/week, no quality gain; Gallup/Walton weekly users 5.9 hours / six weeks; TALIS 2024 planning ~14% of time, marking ~9%, OECD full-time ~41h; TALIS 2018 6.5h planning
03 What Cadence is and is not
04 Illustrative scenario (clearly labelled, not a fake case study): Year 6 Cambridge Lower Secondary Science; teacher absent weeks 11–12; Week 13 checkpoint and Week 16 mid-year paper LOCKED; cover packs; CLOs preserved; practical not dropped
05 Outcomes for teachers, HODs, leadership, students
06 Time-returned model (teachers × hours × 36 weeks; contrast ChatGPT 25 min baseline). Conservative default ~4h/week, below Gallup, because Cadence is institutional weekly use. State this is a model, not a completed client result.
07 Why this cannot be prompted into existence — calibration vs generation; school keeps source curriculum and approved packs; operating layer is the partnership
08 Why this founder — only real facts above
09 Engagement: 2-week paid calibration → 90-day pilot (two year groups, one department) → rollout → annual refresh. Governance: no student PII required; UNESCO human-agency constraints
10 The ask — counterpart named, judge on a term, keep packs if it fails
11 Sources, numbered, with a one-line note each

VOICE
Short paragraphs. One memorable sentence a principal will repeat: “Anyone can generate a lesson. Almost no one can generate a term.” Another: “Efficiency without the school inside it is just faster mediocrity.”
Use a comparison table (generic AI vs Cadence) in outcome language.
Close with founder name and contacts.
Footer: Document CAD-2026-01 · figures from published studies attributed · 72%/150+/four codes are founder teaching outcomes · Year 6 scene is illustrative.

OUTPUT
Clean semantic HTML suitable for print-to-PDF: cover, contents, sections with kickers 00–11, blockquote, table, definition list of proof numbers, numbered sources. No CSS frameworks, no JavaScript, no images. Typographic HTML only.`;

export const codexPrompt = `You are the founder’s private systems architect and commercial counsel. Produce an INTERNAL ARCHITECTURE CODEX that Muhammad Mujahid will keep on his laptop. Watermark the entire document RESTRICTED — DO NOT CIRCULATE.

TASK
Write CAD-2026-X Architecture Codex: the memory of Cadence — pipelines, constraints, stack options, moat, commercial ranges, clone defence, 8-minute pitch script, and (at the end) two master prompts: one that regenerates the PUBLIC institutional brief, and this one that regenerates the codex. The public brief prompt must be written so that its output contains ZERO architecture a vendor could build from.

AUDIENCE
Only Muhammad. Assume he is a BSE who has taught CAIE CS/ICT (codes 2210, 0417, 0478, 9618), 72% A/B, MIEE 2025, and will pitch to Karachi Cambridge schools.

CONTENTS (use these headings)
A. What you are actually selling (operating layer, not lesson-plan mill)
B. Ten system layers: curriculum graph, calendar service, staff/section registry, coverage ledger, planner compiler, absence rebalancer, differentiation engine, assessment sampler, document renderer, human review loop — each with one paragraph of what it MUST guarantee
C. Curriculum ingestion pipeline (collect → parse → HOD workshop → freeze v1.0 → compile with eval suite → live weekly ledger + absence events). The workshop is the moat; describe why
D. Absence rebalancer as a constrained rescheduler: hard vs soft constraints, objective = minimise CLO risk before next locked date, LLM writes packs FROM a validated sequence, never the reverse. Mention CP-SAT/ILP or rules-validate-LLM-propose
E. Suggested stack (changeable): tenancy, no student PII in prompts, Postgres + object store + optional vectors over school-approved text only, prompt registry versioned separately from app releases, golden-pack eval as a CI gate, staging→canary→prod, residency decided in contract
F. Moat list: lived CAIE judgement; paid calibration gate; hosted layer vs exportable packs; change management; annual syllabus refresh
G. Internal commercial shape (ranges as guidance, not quotes): paid discovery, 90-day pilot, annual campus licence. Refuse source-code and white-label unless it is an acquisition
H. Clone defence: the calm paragraph to say out loud
I. Eight-minute pitch, timed beats, with the actual spoken lines
J. Reproduce BOTH master prompts in full (public brief prompt + this codex prompt) so the founder can regenerate PDFs later

CONSTRAINTS
Be precise. No emoji. No vendor names that lock him. Do not include student data designs. Remind him never to email this document, never to put it on a school Drive, never to read from it in a pitch.
Output clean semantic HTML for print-to-PDF, dark-paper acceptable via simple inline CSS (ink on paper is also fine).`;
