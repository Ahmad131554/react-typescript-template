import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStoredTheme, setTheme, type ThemeMode } from "@/theme/theme";

export function ThemeToggle() {
  const [mode, setModeState] = React.useState<ThemeMode>(() => getStoredTheme() ?? "light");

  React.useEffect(() => {
    // Ensure DOM matches on first mount (in case of client-side nav/hydration)
    setTheme(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setModeState(next);
    setTheme(next);
  };

  const Icon = mode === "light" ? Moon : Sun;

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      <Icon className="h-5 w-5" />
    </Button>
  );
}
