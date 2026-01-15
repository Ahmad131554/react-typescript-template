export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme";

export function getStoredTheme(): ThemeMode | null {
  const t = localStorage.getItem(STORAGE_KEY);
  return t === "light" || t === "dark" ? t : null;
}

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
}

export function setTheme(mode: ThemeMode) {
  localStorage.setItem(STORAGE_KEY, mode);
  applyTheme(mode);
}

export function initTheme(defaultTheme: ThemeMode = "light") {
  const stored = getStoredTheme() ?? defaultTheme;
  applyTheme(stored);
}
