import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, targetLang: string = lang) {
    // 1. Limpiar path existente
    const cleanPath = path.replace(new RegExp(`^/(${Object.keys(ui).join('|')})`), '');
    
    // 2. Normalizar formato
    const normalizedPath = cleanPath.startsWith('/') 
      ? cleanPath 
      : `/${cleanPath}`;

    // 3. Construir ruta final
    return !showDefaultLang && targetLang === defaultLang
      ? normalizedPath
      : `/${targetLang}${normalizedPath}`;
  }
}