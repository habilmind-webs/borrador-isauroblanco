import { Container, PageHeader, SectionTitle, ExtLink } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import Icon from '../components/Icon.jsx';
import VideoCard from '../components/VideoCard.jsx';
import { VIDEOS, PONENCIA, ENTREVISTAS } from '../content.js';

export default function Conferencias() {
  return (
    <>
      <PageHeader titulo="Conferencias y medios" entradilla="Una voz que explicaba con claridad **cómo aprende el cerebro** y cómo acompañar mejor a niños, adolescentes y docentes." />
      <section aria-label="Fotografías de conferencias" className="pt-12">
        <Container className="grid grid-cols-3 gap-3 sm:gap-5">
          <Img name="isauro-conferencia-escenario" alt="Isauro Blanco durante una conferencia" sizesAttr="33vw" className="h-36 w-full rounded-tarjeta object-cover sm:h-64" />
          <Img name="isauro-panel" alt="Isauro Blanco en un panel de expertos" sizesAttr="33vw" className="h-36 w-full rounded-tarjeta object-cover sm:h-64" />
          <Img name="isauro-conferencia-atril" alt="Isauro Blanco durante una conferencia" sizesAttr="33vw" className="h-36 w-full rounded-tarjeta object-cover object-top sm:h-64" />
        </Container>
      </section>
      <section aria-labelledby="videos" className="py-16">
        <Container>
          <SectionTitle id="videos">Vídeos</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v) => <VideoCard key={v.id} v={v} />)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="ponencias" className="bg-claro py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle id="ponencias">Ponencias</SectionTitle>
            <div className="mt-6 flex items-start gap-4 rounded-tarjeta bg-white p-6 shadow-suave">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-claro text-turquesa"><Icon name="Mic" className="h-5 w-5" /></span>
              <div>
                <h3 className="font-titulo text-lg font-semibold text-marino">«{PONENCIA.titulo}»</h3>
                <p className="mt-1 text-sm text-marino/75">{PONENCIA.contexto}</p>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle>Entrevistas</SectionTitle>
            <ul className="mt-6 grid gap-4">
              {ENTREVISTAS.map((e) => (
                <li key={e.href} className="flex items-start gap-4 rounded-tarjeta bg-white p-6 shadow-suave">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-claro text-turquesa"><Icon name="Newspaper" className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-titulo text-lg font-semibold text-marino"><ExtLink href={e.href}>«{e.titulo}»</ExtLink></h3>
                    <p className="mt-1 text-sm text-marino/75">{e.contexto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
