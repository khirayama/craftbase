import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

type Theme = "light" | "dark";

export type ThemeOption = "system" | Theme;

export const resolveTheme = (th: ThemeOption): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  return th === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light"
    : th;
};

export const themeOptions: ThemeOption[] = ["system", "light", "dark"];

const ThemeContext = createContext<
  [ThemeOption, Dispatch<SetStateAction<ThemeOption>>]
>(["system", () => {}]);

export function useTheme(): [
  ThemeOption,
  Dispatch<SetStateAction<ThemeOption>>,
] {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [th, setTheme] = useState<ThemeOption>("system");
  const theme = resolveTheme(th);

  useEffect(() => {
    themeOptions.forEach((t) => {
      document.documentElement.classList.remove(t);
    })
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={[th, setTheme]}>
     {children}
    </ThemeContext.Provider>
  );
}
