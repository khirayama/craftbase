import { ThemeProvider } from "./ThemeProvider";
import { I18nProvider } from "./I18nProvider";

export function Provider({ children }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
}
