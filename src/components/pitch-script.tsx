const beats = [
  {
    t: "0:00 — Open on a number",
    d: "“OECD says planning is about a seventh of a teacher’s working week. In our primary and middle years, it is worse: the curriculum moves, the calendar eats a quarter of the year, and the planning happens at 6pm. Your A-Level specialist can freeze a file. Your Year 5 teacher cannot.”",
  },
  {
    t: "1:20 — Name the trap",
    d: "“Staff already use ChatGPT. A UK trial measured it: twenty-five minutes a week, no quality gain. That is not an integration. That is forty private habits the inspector cannot see, and a cover teacher cannot inherit.”",
  },
  {
    t: "2:20 — Say what Cadence is",
    d: "“We are not building you a website. Cadence is a curriculum operating layer, calibrated to this school. It plans the term, writes the lessons to command words and CLOs, and rebalances when someone is absent so the May paper does not move.”",
  },
  {
    t: "3:20 — Tell the fortnight",
    d: "Walk the Year 6 Science absence. Locked checkpoint. Cover packs in 48 hours. Practical kept. CLO not dropped. “This is the part a chatbot cannot do, because nobody asked it the calendar.”",
  },
  {
    t: "4:40 — Why you",
    d: "“I have taught this. Four CAIE codes, 150+ students, 72% A/B across four cohorts, peak 77%. I have already had teachers pay me to write their plans. I also build software. You are not hiring a vendor who read a PDF.”",
  },
  {
    t: "5:40 — Why they must commission you",
    d: "“If you hand this idea to IT, you will get a chatbot with a crest. The product is the calibration: your scheme, your locked dates, your mixed-ability bands, my Cambridge judgement. That does not paste.”",
  },
  {
    t: "6:40 — The ask",
    d: "“Two year groups, one department, two-week calibration, 90-day pilot. Judge us on a term. If coverage, hours, and one real absence do not improve, you keep the packs and we are done. If they do, we have earned the year.”",
  },
  {
    t: "7:30 — Close",
    d: "Stop talking. Put the one-page memo in front of them. Let silence work.",
  },
];

export function PitchScript() {
  return (
    <ol className="space-y-4">
      {beats.map((b) => (
        <li key={b.t} className="rounded-lg border border-codex-line bg-codex-2 px-4 py-4">
          <p className="font-sans text-sm font-medium text-codex-fg">{b.t}</p>
          <p className="mt-2 font-serif text-[15px] leading-relaxed text-codex-muted">{b.d}</p>
        </li>
      ))}
    </ol>
  );
}
