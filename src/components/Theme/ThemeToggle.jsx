"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <FiSun className="w-5 h-5 text-amber-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}