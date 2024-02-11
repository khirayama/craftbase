import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import i18next from "i18next";

export type Lng = "ja" | "en";

const jaTranslation = {
  routes: {
    index: {
      'helloFromIndexPage': "トップページからこんにちわ"
    }
  }
}

const enTranslation = {
  routes: {
    index: {
      'helloFromIndexPage': "Hello from Index Page"
    }
  }
}

const options = {
  // detection: {
  //   lookupQuerystring: "hl",
  // },
  fallbackLng: "ja" as Lng,
  resources: {
    en: {
      translation: enTranslation,
    },
    ja: {
      translation: jaTranslation,
    },
  },
};

export const init = () => {
  i18next.init(options);
}

export const resolveLng = () => i18next.resolvedLanguage as Lng;

export const supportedTranslations = () => Object.keys(options.resources);

export const t = i18next.t;

const I18nContext = createContext<
  [Lng, Dispatch<SetStateAction<Lng>>]
>([options.fallbackLng, () => {}]);

export function useI18n(): [
  Lng,
  Function,
] {
  const [lng, nativeSetLang] = useContext(I18nContext);
  const setLng = (lg: Lng) => {
    i18next.changeLanguage(lg);
    nativeSetLang(lg);
  }
  return [lng, setLng];
}

export function I18nProvider(props: { children: ReactNode }) {
  const [, setLng] = useState<Lng>(options.fallbackLng);
  const lng = resolveLng();

  return (
    <I18nContext.Provider value={[lng, setLng]}>
     {props.children}
    </I18nContext.Provider>
  );
}
