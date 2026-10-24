import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import ca from './locales/ca.json';
export const resources = { en: { translation: en }, es: { translation: es }, ca: { translation: ca } };

export const getDefaultLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';

  const saved = localStorage.getItem('language');
  if (saved) return saved;

  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase();
    if (code.startsWith('ca')) return 'ca';
    if (code.startsWith('es')) return 'es';
  }
  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  // Server and first client render must agree; the detected language is
  // applied after hydration (see __root.tsx).
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
