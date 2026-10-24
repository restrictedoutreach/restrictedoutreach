import { useTranslation } from 'react-i18next';
export type Language = 'es' | 'ca' | 'en';
export const choose = (lang: string, es: string, ca: string, en: string) => lang.startsWith('es') ? es : lang.startsWith('ca') ? ca : en;
export function useCommercial() { const { i18n } = useTranslation(); return (es: string, ca: string, en: string) => choose(i18n.language, es, ca, en); }
export const publicPages = ['/', '/strategy', '/services/development', '/method', '/diagnosis', '/about', '/contact', '/privacy', '/terms', '/cookies'];
export function commercialHead(title: string, description: string, path: string, noindex = false) { return { meta: [{title: `${title} | RESTRICTED OUTREACH`}, {name:'description', content:description}, {property:'og:title',content:`${title} | RESTRICTED OUTREACH`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}, ...(noindex ? [{name:'robots',content:'noindex, follow'}] : [])], links:[{rel:'canonical',href:`https://www.restrictedoutreach.com${path}`}] }; }
export const diagnosticRules = { workshopMinutes: 120, pilotDays: 30, methodologyWeeks: 6 };
