import { useEffect, useState } from "react";
import { BriefDocument } from "@/components/brief-document";
import { CodexDocument } from "@/components/codex-document";
import { VaultGate } from "@/components/vault-gate";
import { Button } from "@/components/ui/button";
import { isVaultUnlocked, lockVault } from "@/lib/vault";
import { cn } from "@/lib/utils";

type Doc = "brief" | "codex";

export function AppShell() {
  const [doc, setDoc] = useState<Doc>("brief");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(isVaultUnlocked());
  }, []);

  function printDoc() {
    window.print();
  }

  const brief = doc === "brief";

  return (
    <div className={cn("min-h-dvh", brief ? "bg-paper text-ink" : "bg-codex text-codex-fg")}>
      <header
        className={cn(
          "no-print sticky top-0 z-20 border-b backdrop-blur-md",
          brief ? "border-line bg-paper/90" : "border-codex-line bg-codex/90",
        )}
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <div className="mr-auto">
            <p className="font-display text-lg leading-none tracking-tight">Cadence</p>
            <p
              className={cn(
                "mt-0.5 font-sans text-[10px] uppercase tracking-[0.16em]",
                brief ? "text-faint" : "text-codex-muted",
              )}
            >
              Curriculum intelligence
            </p>
          </div>
          <div
            className={cn(
              "flex rounded-md border p-0.5",
              brief ? "border-line bg-paper-3" : "border-codex-line bg-codex-2",
            )}
          >
            <Tab active={brief} onClick={() => setDoc("brief")} ink={brief}>
              Brief
            </Tab>
            <Tab active={!brief} onClick={() => setDoc("codex")} ink={brief}>
              Vault
            </Tab>
          </div>
          {brief || unlocked ? (
            <Button
              type="button"
              variant={brief ? "primary" : "paper"}
              size="sm"
              onClick={printDoc}
            >
              Save as PDF
            </Button>
          ) : null}
          {!brief && unlocked ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-codex-fg hover:bg-codex-2"
              onClick={() => {
                lockVault();
                setUnlocked(false);
              }}
            >
              Lock
            </Button>
          ) : null}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {brief ? (
          <BriefDocument />
        ) : unlocked ? (
          <CodexDocument />
        ) : (
          <VaultGate onUnlock={() => setUnlocked(true)} />
        )}
      </main>

      <footer
        className={cn(
          "no-print border-t px-4 py-6 text-center font-sans text-xs",
          brief ? "border-line text-faint" : "border-codex-line text-codex-muted",
        )}
      >
        {brief
          ? "Show this tab. Print it. Leave the vault closed."
          : "Founder copy. Do not project, forward, or print in a school."}
      </footer>
    </div>
  );
}

function Tab({
  active,
  onClick,
  children,
  ink,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
  ink: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 min-w-20 rounded-sm px-3 font-sans text-sm font-medium",
        active
          ? ink
            ? "bg-ink text-paper"
            : "bg-paper text-ink"
          : ink
            ? "text-muted"
            : "text-codex-muted",
      )}
    >
      {children}
    </button>
  );
}
