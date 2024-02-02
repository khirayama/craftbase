import type { MetaFunction } from "@remix-run/node";

import {themeOptions, useTheme, ThemeOption} from '~/libs/Provider';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [th, setTheme] = useTheme();
  console.log(th);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-400">Hello from index page</h1>
      <select value={th} onChange={(e) => {
        const v = e.currentTarget.value as ThemeOption;
        setTheme(v);
      }}>
      {themeOptions.map((item) => {
        return <option key={item} value={item}>{item}</option>;
      })}
      </select>
    </div>
  );
}
