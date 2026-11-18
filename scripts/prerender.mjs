// Pre-renderiza todas las rutas a HTML estático con su <head> (SEO, Open Graph, JSON-LD).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const { render, ROUTES, LIBROS, BIO_ENTRADILLA } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const SITE = 'https://isauroblanco.com';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const json = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

const person = {
  '@type': 'Person', '@id': `${SITE}/#persona`,
  name: 'Isauro Blanco Pedraza', alternateName: 'Isauro Blanco',
  jobTitle: 'Filósofo, pedagogo y psicólogo educativo y clínico',
  description: BIO_ENTRADILLA,
  deathDate: '2025-06-29',
  deathPlace: { '@type': 'Place', name: 'Madrid, España' },
  award: 'Mención Honorífica, Premios Nacionales de Investigación e Innovación Educativa 2007',
  knowsAbout: ['Neuropsicología educativa', 'Coaching escolar', 'Habilidades de pensamiento', 'Aprendizaje'],
  image: `${SITE}/img/isauro-retrato-sonriendo-510.webp`,
  url: `${SITE}/`,
};

function jsonLd(r) {
  const url = `${SITE}${r.path === '/' ? '/' : r.path}`;
  const out = [];
  if (r.path === '/') {
    out.push({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}/#web`, name: 'Isauro Blanco', url: `${SITE}/`, inLanguage: 'es' });
    out.push({ '@context': 'https://schema.org', '@type': 'ProfilePage', url: `${SITE}/`, name: r.title, inLanguage: 'es', mainEntity: person });
  } else {
    out.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: r.nombre, item: url },
    ] });
  }
  if (r.path === '/biografia') out.push({ '@context': 'https://schema.org', ...person });
  if (r.path === '/publicaciones') {
    for (const l of LIBROS) {
      const b = { '@context': 'https://schema.org', '@type': 'Book', name: l.subtitulo ? `${l.titulo}: ${l.subtitulo}` : l.titulo, author: { '@type': 'Person', name: 'Isauro Blanco Pedraza', '@id': `${SITE}/#persona` }, inLanguage: 'es' };
      if (l.isbn) b.isbn = l.isbn;
      if (l.fecha) b.datePublished = l.fecha;
      if (l.editorial) b.publisher = { '@type': 'Organization', name: l.editorial };
      if (l.paginas) b.numberOfPages = l.paginas;
      if (l.portada) b.image = `${SITE}/img/${l.portada}-480.webp`;
      out.push(b);
    }
  }
  return out.map(json).join('\n    ');
}

function head(r) {
  const url = `${SITE}${r.path === '/' ? '/' : r.path}`;
  const og = `${SITE}/og/og-${r.og}.jpg`;
  const tags = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${r.path === '/' ? 'profile' : 'article'}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:site_name" content="Isauro Blanco" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Isauro Blanco" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
  ];
  if (r.path === '/') tags.push('<link rel="preload" as="image" type="image/webp" href="/img/isauro-retrato-traje-960.webp" imagesrcset="/img/isauro-retrato-traje-480.webp 480w, /img/isauro-retrato-traje-960.webp 960w, /img/isauro-retrato-traje-1124.webp 1124w" imagesizes="(min-width: 1024px) 58vw, 100vw" fetchpriority="high" />');
  tags.push(jsonLd(r));
  return tags.join('\n    ');
}

for (const r of ROUTES) {
  const html = template.replace('<!--head-->', head(r)).replace('<!--app-->', render(r.path));
  const file = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log('prerender', r.path);
}

// 404 sin indexar
const nf = template.replace('<!--head-->', '<title>Página no encontrada | Isauro Blanco</title>\n    <meta name="robots" content="noindex" />').replace('<!--app-->', render('/pagina-no-encontrada'));
fs.writeFileSync(path.join(dist, '404.html'), nf);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((r) => `  <url><loc>${SITE}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('ok');
