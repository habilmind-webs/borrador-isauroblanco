import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import Img from './Img.jsx';
import { useConsent } from './Consent.jsx';

// Fachada ligera: miniatura alojada en el propio sitio; YouTube (youtube-nocookie) solo se carga al pulsar.
export default function VideoCard({ v, headingLevel = 'h3' }) {
  const H = headingLevel;
  const { allowed } = useConsent();
  const [step, setStep] = useState('idle'); // idle | aviso | play
  const yt = `https://www.youtube.com/watch?v=${v.id}`;
  const start = () => setStep(allowed('marketing') ? 'play' : 'aviso');

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-tarjeta bg-white shadow-suave ring-1 ring-marino/5">
      <div className="relative aspect-video bg-marino">
        {step === 'play' ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Img name={`video-${v.id}`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" sizesAttr="(min-width: 1024px) 33vw, 100vw" />
            {step === 'aviso' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-marino/90 p-4 text-center text-white" role="group" aria-label="Aviso antes de cargar el vídeo">
                <p className="text-sm sm:text-base">Al reproducir este vídeo se cargará contenido de YouTube.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button type="button" onClick={() => setStep('play')} autoFocus className="min-h-[44px] rounded-xl bg-turquesa-oscuro px-4 font-titulo font-medium hover:bg-turquesa-hondo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Cargar vídeo</button>
                  <a href={yt} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1 rounded-xl border border-white/70 px-4 font-titulo font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    Abrir en YouTube<ExternalLink aria-hidden="true" className="h-4 w-4" /><span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <H className="font-titulo text-lg font-semibold leading-snug text-marino">«{v.titulo}»</H>
        <p className="mt-1 text-sm text-marino/75">{v.contexto}</p>
        {v.texto && <p className="mt-3 leading-relaxed text-marino/85">«{v.texto}»</p>}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          {step !== 'play' && (
            <button type="button" onClick={start} className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-turquesa-oscuro px-4 font-titulo font-medium text-white hover:bg-turquesa-hondo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa focus-visible:ring-offset-2">
              <Play aria-hidden="true" className="h-4 w-4" /> Ver vídeo<span className="sr-only">: {v.titulo}</span>
            </button>
          )}
          <a href={yt} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1 text-sm text-turquesa-oscuro underline underline-offset-4">
            Ver en YouTube<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /><span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
