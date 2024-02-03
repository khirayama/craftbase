import type { MetaFunction } from "@remix-run/node";

import {themeOptions, useTheme, ThemeOption, useI18n, t, supportedTranslations, Lng} from '~/libs/Provider';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [th, setTheme] = useTheme();
  const [lng, setLng] = useI18n();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-400">{t('routes.index.helloFromIndexPage')}</h1>
      <select value={th} onChange={(e) => {
        const v = e.currentTarget.value as ThemeOption;
        setTheme(v);
      }}>
      {themeOptions.map((t) => {
        return <option key={t} value={t}>{t}</option>;
      })}
      </select>
      <select value={lng} onChange={(e) => {
        const v = e.currentTarget.value as Lng;
        setLng(v);
      }}>
      {supportedTranslations().map((hl) => {
        return <option key={hl} value={hl}>{hl}</option>;
      })}
      </select>
    </div>
  );
}
