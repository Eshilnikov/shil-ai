import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Strip the language prefix from a path. Used to build the toggle link.
export function stripLangPrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && parts[0] in ui && parts[0] !== defaultLang) {
    return "/" + parts.slice(1).join("/");
  }
  return pathname;
}

// Build a localized path. Default lang has no prefix; other langs are prefixed.
export function localizedPath(path: string, lang: Lang): string {
  const cleanPath = stripLangPrefix(path);
  if (lang === defaultLang) return cleanPath || "/";
  const stripped = cleanPath === "/" ? "" : cleanPath;
  return `/${lang}${stripped}`;
}
