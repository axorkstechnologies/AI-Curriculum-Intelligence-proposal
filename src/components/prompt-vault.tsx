import { useState } from "react";
import { briefPrompt, codexPrompt } from "@/lib/content/prompts";
import { Button } from "@/components/ui/button";

export function PromptVault() {
  return (
    <div className="space-y-6">
      <PromptCard
        title="Prompt A — Institutional Brief (the file they may hold)"
        filename="cadence-brief-prompt.txt"
        body={briefPrompt}
      />
      <PromptCard
        title="Prompt B — Architecture Codex (never leave the laptop)"
        filename="cadence-codex-prompt.txt"
        body={codexPrompt}
      />
    </div>
  );
}

function PromptCard({
  title,
  filename,
  body,
}: {
  title: string;
  filename: string;
  body: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function download() {
    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-codex-line bg-codex">
      <div className="flex flex-col gap-3 border-b border-codex-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-sm font-medium text-codex-fg">{title}</p>
        <div className="flex gap-2">
          <Button variant="paper" size="sm" onClick={copy} type="button">
            {copied ? "Copied" : "Copy prompt"}
          </Button>
          <Button variant="paper" size="sm" onClick={download} type="button">
            Download .txt
          </Button>
        </div>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 font-mono text-[11px] leading-relaxed text-codex-muted whitespace-pre-wrap">
        {body}
      </pre>
    </div>
  );
}
