import { BriefDocument } from "@/components/brief-document";
import { ProposalOverview } from "@/components/proposal-overview";
import { Button } from "@/components/ui/button";

export function AppShell() {
  function printDoc() {
    window.print();
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a className="skip-link" href="#brief-content">
        Skip to proposal
      </a>
      <header className="no-print sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#brief-content" className="min-w-0 rounded-sm">
            <p className="font-display text-xl leading-none tracking-tight">Cadence</p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.16em] text-faint">
              Curriculum intelligence
            </p>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#ask"
              className="hidden rounded-sm px-3 py-2 font-sans text-sm font-medium text-ink-soft hover:bg-paper-2 sm:inline-flex"
            >
              Start a conversation
            </a>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={printDoc}
              aria-label="Print this proposal or save it as a PDF"
            >
              Print / save PDF
            </Button>
          </div>
        </div>
      </header>

      <main
        id="brief-content"
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12"
        tabIndex={-1}
      >
        <ProposalOverview />
        <div id="full-brief" className="mt-16">
          <BriefDocument showCover={false} />
        </div>
      </main>

      <footer className="no-print border-t border-line px-4 py-6 text-center font-sans text-xs text-faint">
        A working proposal for calibrated curriculum planning.
      </footer>
    </div>
  );
}
