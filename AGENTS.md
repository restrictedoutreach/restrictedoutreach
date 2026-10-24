# Architecture rules
- Decorative Matrix overlays use deterministic markup and CSS animation, with no pointer interception and no animation in reduced-motion mode, to preserve SSR hydration and accessibility.
- Commercial content lives in a browser-safe, typed multilingual module and shared presentation components, so Spanish, Catalan and English use the same page structure.
- Every active content route owns its head metadata; retired public URLs resolve through route-level redirects or explicit Gone responses, not a blanket homepage redirect.
- Keep existing contact-email and chat Edge Functions while maintaining their security controls; new server logic uses TanStack Start.
- Shared layout owns client-side intersection-based animation enhancement; content remains visible in SSR and reduced-motion mode so motion never gates reading or indexing.
- Locale is determined by the URL (existing English URLs, /es and /ca for translated commercial pages); use request-isolated i18next providers and shared localized metadata/link helpers to prevent cross-request language leakage and keep SSR, navigation and hreflang consistent. Legal pages remain English until fully translated.