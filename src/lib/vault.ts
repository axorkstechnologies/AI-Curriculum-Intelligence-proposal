export const VAULT_KEY = "cadence-vault-unlocked";
export const VAULT_PIN = "CAIE2210";
export const VAULT_HINT = "O-Level Computer Science syllabus code, no spaces or dashes.";

export function isVaultUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(VAULT_KEY) === "1";
}

export function unlockVault(pin: string): boolean {
  const normalised = pin.replace(/[\s-]/g, "").toUpperCase();
  if (normalised === VAULT_PIN) {
    sessionStorage.setItem(VAULT_KEY, "1");
    return true;
  }
  return false;
}

export function lockVault() {
  sessionStorage.removeItem(VAULT_KEY);
}
