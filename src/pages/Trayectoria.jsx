import { Container, PageHeader, SectionTitle, Card } from '../components/Ui.jsx';
import Icon from '../components/Icon.jsx';
import Rico from '../components/Rico.jsx';
import Reveal from '../components/Reveal.jsx';
import { TRAYECTORIA, FACETAS } from '../content.js';

export default function Trayectoria() {
  return (
    <>
      <PageHeader titulo="Trayectoria" entradilla="**Más de cuatro décadas** dedicadas a enseñar, investigar y acompañar a quienes educan." />
      <section aria-label="Línea de tiempo" className="py-16">
        <Container>
          <ol className="relative mx-auto max-w-5xl">
            <span aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-ambar/70 via-turquesa/40 to-turquesa/10 md:left-1/2 md:-translate-x-1/2" />
            {TRAYECTORIA.map((t, i) => (
              <li key={t.titulo} className="relative mb-10 pl-20 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span aria-hidden="true" className="absolute left-6 top-4 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-turquesa shadow-suave ring-2 ring-ambar/60 md:left-1/2">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <Reveal className={`rounded-tarjeta bg-white p-6 shadow-suave ring-1 ring-marino/5 ${i % 2 ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                  <p className="font-titulo text-sm font-semibold uppercase tracking-wider text-turquesa-oscuro">{t.cuando}</p>
                  <h2 className="mt-1 font-titulo text-xl font-semibold leading-snug text-marino">{t.titulo}</h2>
                  <p className="mt-2 leading-relaxed text-marino/85"><Rico texto={t.texto} /></p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section aria-labelledby="facetas" className="bg-claro py-16">
        <Container>
          <SectionTitle id="facetas">Otras facetas de su trabajo</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FACETAS.map((f) => <Card key={f.titulo} icon={f.icon} titulo={f.titulo} texto={f.texto} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
