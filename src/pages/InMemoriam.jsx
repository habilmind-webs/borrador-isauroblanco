import { Mail } from 'lucide-react';
import { Container } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import { IN_MEMORIAM_TEXTOS, SITE } from '../content.js';

export default function InMemoriam() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Recuerdo sobre Isauro Blanco')}`;
  return (
    <section className="bg-marino text-white">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_380px]">
        <div className="max-w-lectura">
          <h1 className="font-titulo text-5xl font-semibold tracking-tight sm:text-6xl">In memoriam</h1>
          <span aria-hidden="true" className="mt-6 block h-1 w-14 rounded-full bg-turquesa" />
          {IN_MEMORIAM_TEXTOS.map((t) => <p key={t.slice(0, 30)} className="mt-6 text-xl leading-relaxed text-white/90">{t}</p>)}
          <div className="mt-10">
            <a href={mailto} className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-titulo font-medium text-marino hover:bg-claro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marino">
              <Mail aria-hidden="true" className="h-5 w-5" /> Escribir un recuerdo
            </a>
          </div>
          <p className="mt-14 font-serif text-3xl">Gracias, Isauro.</p>
        </div>
        <Img name="isauro-retrato-sentado" alt="Isauro Blanco, retrato" priority sizesAttr="(min-width: 1024px) 380px, 90vw" className="w-full rounded-tarjeta object-cover shadow-2xl" />
      </Container>
    </section>
  );
}
