import { ExternalLink } from 'lucide-react';
import { Container, PageHeader, SectionTitle, ExtLink } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import Icon from '../components/Icon.jsx';
import Rico from '../components/Rico.jsx';
import Reveal from '../components/Reveal.jsx';
import { LIBROS, ARTICULOS } from '../content.js';

function Portada({ l }) {
  if (l.portada) {
    return <Img name={l.portada} alt={`Portada del libro «${l.titulo}»`} sizesAttr="(min-width: 1024px) 200px, 40vw" className="mx-auto h-64 w-auto rounded-md object-contain shadow-suave" />;
  }
  return (
    <div className="mx-auto flex h-64 w-44 flex-col justify-between rounded-md bg-marino p-4 text-left text-white shadow-suave">
      <span aria-hidden="true" className="h-1 w-8 rounded-full bg-turquesa" />
      <div>
        <p className="font-titulo text-lg font-semibold leading-tight">{l.titulo}</p>
        {l.subtitulo && <p className="mt-2 text-sm leading-snug text-white/80">{l.subtitulo}</p>}
      </div>
      <p className="text-xs uppercase tracking-wider text-white/70">Isauro Blanco</p>
    </div>
  );
}

export default function Publicaciones() {
  return (
    <>
      <PageHeader titulo="Publicaciones" entradilla="Libros y artículos para **docentes, directivos y familias**." />
      <section aria-labelledby="libros" className="py-16">
        <Container>
          <SectionTitle id="libros">Libros</SectionTitle>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIBROS.map((l) => (
              <li key={l.id}>
                <Reveal as="article" className="flex h-full flex-col rounded-tarjeta bg-white p-6 shadow-suave ring-1 ring-marino/5">
                  <div className="rounded-xl bg-claro py-6"><Portada l={l} /></div>
                  <h3 className="mt-5 font-titulo text-xl font-semibold leading-snug text-marino">{l.titulo}</h3>
                  {l.subtitulo && <p className="text-marino/80">{l.subtitulo}</p>}
                  {l.datos.length > 0 && <p className="mt-2 text-sm text-marino/70">{l.datos.join(' · ')}</p>}
                  {l.texto && <p className="mt-3 leading-relaxed text-marino/85"><Rico texto={l.texto} /></p>}
                  {l.tienda && (
                    <div className="mt-auto pt-5">
                      <a href={l.tienda} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-turquesa-oscuro px-4 font-titulo font-medium text-white hover:bg-turquesa-hondo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa focus-visible:ring-offset-2">
                        Ver en tienda<span className="sr-only">: {l.titulo} (se abre en una pestaña nueva)</span><ExternalLink aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section aria-labelledby="articulos" className="bg-claro py-16">
        <Container>
          <SectionTitle id="articulos">Artículos</SectionTitle>
          <ul className="mt-8 grid gap-4">
            {ARTICULOS.map((a) => (
              <li key={a.href} className="flex items-start gap-4 rounded-tarjeta bg-white p-5 shadow-suave ring-1 ring-marino/5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-claro text-turquesa"><Icon name="Newspaper" className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-titulo text-lg font-semibold leading-snug text-marino"><ExtLink href={a.href}>«{a.titulo}»</ExtLink></h3>
                  <p className="mt-1 text-sm text-marino/75">{a.medio} · {a.fecha}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
