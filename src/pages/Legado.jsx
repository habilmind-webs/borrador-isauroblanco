import { Container, PageHeader, SectionTitle, Card, QuoteBlock } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import Icon from '../components/Icon.jsx';
import Rico from '../components/Rico.jsx';
import Reveal from '../components/Reveal.jsx';
import { LOGROS, CITAS, HABILMENTE } from '../content.js';

export default function Legado() {
  return (
    <>
      <PageHeader titulo="Su legado" entradilla="Una forma de entender la educación que **sigue viva** en escuelas, docentes y familias." />
      <section aria-labelledby="logros" className="py-16">
        <Container>
          <h2 id="logros" className="sr-only">Logros</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LOGROS.map((l) => <Card key={l.titulo} icon={l.icon} titulo={l.titulo} texto={l.texto} />)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="citas" className="bg-claro py-16">
        <Container>
          <SectionTitle id="citas">Sus ideas, en sus palabras</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CITAS.map((c) => <Reveal key={c.texto}><QuoteBlock texto={c.texto} autor={c.fuente} /></Reveal>)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="habilmente" className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-claro text-turquesa"><Icon name="BrainCircuit" /></span>
            <SectionTitle id="habilmente" className="mt-4">Programa Hábilmente</SectionTitle>
            <p className="mt-5 max-w-lectura text-lg leading-relaxed text-marino/90"><Rico texto={HABILMENTE} /></p>
          </Reveal>
          <Reveal>
            <Img name="isauro-globo-plasma" alt="Isauro Blanco, retrato" sizesAttr="(min-width: 768px) 50vw, 100vw" className="w-full rounded-tarjeta object-cover shadow-suave" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
