# Isauro Blanco · In memoriam (borrador)

Sitio homenaje a Isauro Blanco que sustituirá a isauroblanco.com. Encargo de la dirección (Melany López) vía Rosario, 18/11/2026.

- React + Vite + Tailwind + lucide-react, con pre-renderizado de las 8 rutas (`npm run build` → `dist/`).
- Vista previa: https://borrador-isauroblanco.2-31-95-201.sslip.io (sin indexar).
- Textos: `src/content.js` (copiados literalmente del prompt; no añadir datos).
- Sin analítica ni marketing. Gestor de consentimiento propio en `src/components/Consent.jsx`.
- Sin páginas legales propias: enlaces externos a trust.habilmind.dev.
- Paso a producción: solo con el OK de Rosario; dominio y DNS solo con el OK de Joaquín. Las redirecciones 301 de las URL antiguas están preparadas en `deploy/redirecciones-301.caddy` (no se aplican en el borrador).
