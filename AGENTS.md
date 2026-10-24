# Architecture rules
- Commercial content lives in a browser-safe, typed multilingual module and shared presentation components, so Spanish, Catalan and English use the same page structure.
- Every active content route owns its head metadata; retired public URLs resolve through route-level redirects or explicit Gone responses, not a blanket homepage redirect.
- Keep existing contact-email and chat Edge Functions while maintaining their security controls; new server logic uses TanStack Start.