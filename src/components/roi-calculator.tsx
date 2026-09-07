import { useMemo, useState } from "react";

function fmt(n: number) {
  return new Intl.NumberFormat("en-GB").format(Math.round(n));
}

export function RoiCalculator() {
  const [teachers, setTeachers] = useState(28);
  const [hours, setHours] = useState(4);
  const weeks = 36;

  const { annual, fte, chatgpt } = useMemo(() => {
    const annualHours = teachers * hours * weeks;
    const fteEquiv = annualHours / (36 * 40);
    const chatgptHours = teachers * (25 / 60) * weeks;
    return { annual: annualHours, fte: fteEquiv, chatgpt: chatgptHours };
  }, [teachers, hours]);

  return (
    <section className="print-avoid rounded-xl border border-line bg-paper-3 p-5 sm:p-7">
      <p className="font-sans text-xs tracking-[0.18em] uppercase text-faint">
        Time returned — model, not a promise
      </p>
      <h2 className="mt-2 font-display text-2xl font-medium text-ink">
        What happens if this school takes hours back.
      </h2>
      <p className="mt-2 font-serif text-[15px] leading-relaxed text-muted">
        OECD TALIS puts planning near 6.5 hours a week. Weekly AI users in the
        Gallup/Walton study recover 5.9 hours. Generic ChatGPT, in a rigorous UK
        trial, recovered 25 minutes. Cadence is built for the institutional gap
        between those two numbers.
      </p>

      <div className="mt-6 space-y-8">
        <label className="block">
          <div className="mb-1 flex items-baseline justify-between font-sans text-sm">
            <span className="text-muted">Teachers in scope</span>
            <span className="tabular-nums font-medium text-ink">{teachers}</span>
          </div>
          <div className="flex h-10 items-center">
            <input
              type="range"
              min={8}
              max={80}
              value={teachers}
              onChange={(e) => setTeachers(Number(e.target.value))}
              className="w-full accent-steel"
            />
          </div>
        </label>
        <label className="block">
          <div className="mb-1 flex items-baseline justify-between font-sans text-sm">
            <span className="text-muted">Hours reclaimed / teacher / week</span>
            <span className="tabular-nums font-medium text-ink">{hours.toFixed(1)}</span>
          </div>
          <div className="flex h-10 items-center">
            <input
              type="range"
              min={1.5}
              max={6}
              step={0.5}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-steel"
            />
          </div>
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Hours returned / year" value={fmt(annual)} hint="36 teaching weeks" />
        <Stat label="FTE equivalent" value={fte.toFixed(1)} hint="at 40h × 36 weeks" />
        <Stat
          label="ChatGPT-only baseline"
          value={fmt(chatgpt)}
          hint="25 min/week, same staff"
        />
      </div>
      <p className="mt-4 font-sans text-xs leading-relaxed text-faint">
        Conservative default is 4 hours, below the Gallup weekly-user figure, because
        Cadence is not “AI used sometimes” — it is the school’s planner. The ChatGPT
        baseline is the NFER/EEF RCT. Cadence is not claiming that RCT. Cadence is
        built because that RCT is not enough.
      </p>
    </section>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-lg border border-line bg-paper px-4 py-4">
      <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-faint">{label}</p>
      <p className="mt-1 font-display text-3xl tabular-nums text-ink">{value}</p>
      <p className="mt-1 font-sans text-xs text-muted">{hint}</p>
    </div>
  );
}
