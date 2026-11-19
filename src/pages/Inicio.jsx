import { Container, SectionTitle, Card, ButtonLink, MoreLink } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Rico from '../components/Rico.jsx';
import VideoCard from '../components/VideoCard.jsx';
import { CIFRAS, QUIEN_FUE, IDEAS, IN_MEMORIAM_PORTADA, LIBROS, VIDEOS } from '../content.js';

export default function Inicio() {
  const obra = LIBROS.filter((l) => ['mente-y-aprendizaje', 'aprender-haciendo', 'universo-inteligencia'].includes(l.id));
  const destacados = [VIDEOS[0], VIDEOS[3], VIDEOS[4]];
  return (
    <>
      <section className="relative overflow-hidden bg-marino text-white" aria-labelledby="hero-titulo">
        <figure className="absolute inset-x-0 top-0 m-0 h-80 sm:h-[30rem] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[58%]">
          <Img name="isauro-retrato-traje" alt="Isauro Blanco" priority sizesAttr="(min-width: 1024px) 58vw, 100vw" className="h-full w-full object-cover object-[70%_15%]" />
          <figcaption className="sr-only">Isauro Blanco</figcaption>
          <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-marino via-marino/40 to-marino/10 lg:block" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-marino via-marino/30 to-transparent lg:hidden" />
        </figure>
        <Container className="relative flex items-center pb-20 pt-64 sm:pt-96 lg:min-h-[620px] lg:py-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ambar/60 px-3 py-1 text-sm font-medium tracking-wide text-ambar">In memoriam</p>
            <h1 id="hero-titulo" className="mt-5 font-titulo text-5xl font-semibold tracking-tight sm:text-6xl">Isauro Blanco</h1>
            <p className="mt-3 text-lg text-white/90 sm:text-xl">Filósofo, pedagogo y psicólogo educativo y clínico</p>
            <figure className="mt-8 border-l-2 border-turquesa pl-5">
              <blockquote className="font-serif text-2xl leading-snug sm:text-[1.7rem]"><p>«La enseñanza es más una relación que una técnica.»</p></blockquote>
              <figcaption className="mt-2 text-sm text-white/80">Isauro Blanco, entrevista en Capitel (Universidad Humanitas), 2023</figcaption>
            </figure>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/biografia">Conocer su historia</ButtonLink>
              <ButtonLink to="/legado" variant="borde">Su legado</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Cifras" className="relative z-10 -mt-10">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CIFRAS.map((c) => (
              <li key={c.valor} className="rounded-tarjeta bg-white p-6 shadow-suave ring-1 ring-marino/5">
                <Icon name={c.icon} className="h-7 w-7 text-turquesa" />
                <p className="mt-3 font-titulo text-2xl font-semibold text-marino">{c.valor}</p>
                <p className="mt-1 text-[15px] leading-snug text-marino/80">{c.texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="quien-fue" className="py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_320px]">
          <Reveal>
            <SectionTitle id="quien-fue">Quién fue</SectionTitle>
            <p className="mt-5 max-w-lectura text-lg leading-relaxed text-marino/90"><Rico texto={QUIEN_FUE} /></p>
            <div className="mt-5"><MoreLink to="/biografia">Leer su biografía completa</MoreLink></div>
          </Reveal>
          <Reveal className="mx-auto w-full max-w-xs">
            <Img name="isauro-retrato-sonriendo" alt="Isauro Blanco, retrato" sizesAttr="320px" className="aspect-square w-full rounded-tarjeta object-cover shadow-suave" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="ideas" className="bg-claro py-20">
        <Container>
          <SectionTitle id="ideas">Cuatro ideas que lo definen</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IDEAS.map((i) => <Card key={i.titulo} icon={i.icon} titulo={i.titulo} texto={i.texto} fuente={i.fuente} />)}
          </div>
        </Container>
      </section>

      <section aria-labelledby="obra" className="py-20">
        <Container>
          <SectionTitle id="obra">Obra</SectionTitle>
          <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {obra.map((l) => (
              <li key={l.id}>
                <Reveal className="rounded-tarjeta bg-claro p-5">
                  <Img name={l.portada} alt={`Portada del libro «${l.titulo}»`} sizesAttr="(min-width: 640px) 30vw, 45vw" className="mx-auto h-56 w-auto rounded-md object-contain shadow-suave sm:h-72" />
                  <p className="mt-4 font-titulo font-semibold leading-snug text-marino">{l.titulo}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-6"><MoreLink to="/publicaciones">Ver todas sus publicaciones</MoreLink></div>
        </Container>
      </section>

      <section aria-labelledby="conferencias" className="bg-claro py-20">
        <Container>
          <SectionTitle id="conferencias">Conferencias</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destacados.map((v) => <VideoCard key={v.id} v={v} />)}
          </div>
          <div className="mt-6"><MoreLink to="/conferencias-y-medios">Ver conferencias y medios</MoreLink></div>
        </Container>
      </section>

      <section aria-labelledby="memoriam" className="bg-marino py-20 text-white">
        <Container className="max-w-3xl text-center">
          <Icon name="Heart" className="mx-auto h-8 w-8 text-turquesa-claro" />
          <h2 id="memoriam" className="mt-4 font-titulo text-3xl font-semibold">In memoriam</h2>
          <p className="mx-auto mt-5 max-w-lectura text-lg leading-relaxed text-white/90"><Rico texto={IN_MEMORIAM_PORTADA} /></p>
          <div className="mt-8"><ButtonLink to="/in-memoriam" variant="claro">Ir a In memoriam</ButtonLink></div>
        </Container>
      </section>

      <section aria-label="Homenaje de Habilmind" className="border-t border-white/10 bg-marino pb-14 pt-10 text-white">
        <Container className="flex flex-col items-center gap-3 text-center">
          <p className="font-serif text-xl text-white/90 sm:text-2xl">Con el cariño de Habilmind</p>
          <a href="https://habilmind.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded opacity-90 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa-claro">
            <img src="/img/logo-habilmind-negativo-56.webp" alt="Habilmind" width="136" height="56" loading="lazy" decoding="async" className="h-10 w-auto" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </Container>
      </section>
    </>
  );
}
