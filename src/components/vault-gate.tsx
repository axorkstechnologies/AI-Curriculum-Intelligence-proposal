import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { unlockVault, VAULT_HINT } from "@/lib/vault";

export function VaultGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (unlockVault(pin)) {
      setError(false);
      onUnlock();
      return;
    }
    setError(true);
  }

  return (
    <div className="mx-auto max-w-md px-1 py-16">
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-codex-muted">Restricted</p>
      <h1 className="mt-3 font-display text-4xl font-medium text-codex-fg">Architecture Codex</h1>
      <p className="mt-4 font-serif text-[16px] leading-relaxed text-codex-muted">
        This tab is the founder file: pipelines, moat, commercial shape, pitch script, and
        the two master prompts. It is not for principals. If you are in a meeting, go back
        to the Institutional Brief.
      </p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <label className="block">
          <span className="font-sans text-xs uppercase tracking-[0.16em] text-codex-muted">
            Passphrase
          </span>
          <input
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError(false);
            }}
            autoComplete="off"
            className="mt-2 h-12 w-full rounded-md border border-codex-line bg-codex-2 px-3 font-mono text-sm text-codex-fg outline-none focus:border-rule"
            placeholder="Syllabus code"
          />
        </label>
        <p className="font-sans text-xs text-codex-muted">{VAULT_HINT}</p>
        {error ? (
          <p className="font-sans text-sm text-danger">That is not the code.</p>
        ) : null}
        <Button type="submit" variant="paper" className="w-full">
          Open vault
        </Button>
      </form>
    </div>
  );
}
