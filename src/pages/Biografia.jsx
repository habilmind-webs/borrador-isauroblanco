import { Container, PageHeader, QuoteBlock, ExtLink } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import Reveal from '../components/Reveal.jsx';
import { BIO_ENTRADILLA, BIO_SECCIONES, BIO_CITA } from '../content.js';

export default function Biografia() {
  return (
    <>
      <PageHeader titulo="Biografía de Isauro Blanco" entradilla={BIO_ENTRADILLA} />
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_300px]">
        <article className="max-w-lectura">
          {BIO_SECCIONES.map((s) => (
            <Reveal as="section" key={s.titulo} className="mb-12">
              <h2 className="font-titulo text-2xl font-semibold leading-snug text-marino">{s.titulo}</h2>
              {s.parrafos.map((p) => <p key={p.slice(0, 30)} className="mt-4 text-lg leading-relaxed text-marino/90">{p}</p>)}
              {s.fuentes && (
                <p className="mt-3 text-sm leading-relaxed text-marino/70">
                  <span className="font-medium">Fuentes: </span>
                  {s.fuentes.map((f, i) => (
                    <span key={f.texto}>
                      {f.href ? <ExtLink href={f.href}>{f.texto}</ExtLink> : f.texto}
                      {i < s.fuentes.length - 1 ? '; ' : '.'}
                    </span>
                  ))}
                </p>
              )}
            </Reveal>
          ))}
          <QuoteBlock texto={BIO_CITA.texto} autor={BIO_CITA.autor} oscuro />
        </article>
        <aside className="order-first lg:order-none">
          <div className="lg:sticky lg:top-24">
            <Img name="isauro-retrato-sonriendo" alt="Isauro Blanco, retrato" sizesAttr="(min-width: 1024px) 300px, 80vw" priority className="mx-auto aspect-square w-full max-w-xs rounded-tarjeta object-cover shadow-suave" />
          </div>
        </aside>
      </Container>
    </>
  );
}
