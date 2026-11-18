import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Container, PageHeader } from '../components/Ui.jsx';
import Img from '../components/Img.jsx';
import { GALERIA } from '../content.js';

function Lightbox({ index, onClose, onMove }) {
  const ref = useRef(null);
  const item = GALERIA[index];
  useEffect(() => {
    const dlg = ref.current;
    dlg.querySelector('button')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowRight') onMove(1);
      else if (e.key === 'ArrowLeft') onMove(-1);
      else if (e.key === 'Tab') {
        const f = Array.from(dlg.querySelectorAll('button'));
        const first = f[0]; const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose, onMove]);
  const b = 'inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label={`Fotografía ${index + 1} de ${GALERIA.length}: ${item.alt}`} className="fixed inset-0 z-[60] flex flex-col bg-marino-900/95 p-4">
      <div className="flex justify-end"><button type="button" className={b} onClick={onClose}><X aria-hidden="true" /><span className="sr-only">Cerrar</span></button></div>
      <figure className="m-0 flex min-h-0 flex-1 flex-col items-center justify-center gap-3">
        <Img name={item.img} alt={item.alt} sizesAttr="90vw" className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain" />
        <figcaption className="text-white/85">{item.alt}</figcaption>
      </figure>
      <div className="flex justify-center gap-4 pb-2">
        <button type="button" className={b} onClick={() => onMove(-1)}><ChevronLeft aria-hidden="true" /><span className="sr-only">Anterior</span></button>
        <button type="button" className={b} onClick={() => onMove(1)}><ChevronRight aria-hidden="true" /><span className="sr-only">Siguiente</span></button>
      </div>
    </div>
  );
}

export default function Galeria() {
  const [open, setOpen] = useState(null);
  const openerRef = useRef(null);
  const close = useCallback(() => { setOpen(null); setTimeout(() => openerRef.current?.focus(), 0); }, []);
  const move = useCallback((d) => setOpen((i) => (i + d + GALERIA.length) % GALERIA.length), []);
  return (
    <>
      <PageHeader titulo="Galería" entradilla="Imágenes de su vida profesional." />
      <Container className="py-16">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALERIA.map((g, i) => (
            <li key={g.img} className="mb-5 break-inside-avoid">
              <figure className="m-0">
                <button type="button" onClick={(e) => { openerRef.current = e.currentTarget; setOpen(i); }}
                  className="block w-full overflow-hidden rounded-tarjeta shadow-suave focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa focus-visible:ring-offset-2">
                  <Img name={g.img} alt={g.alt} sizesAttr="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full transition-transform duration-300 hover:scale-[1.02]" />
                  <span className="sr-only"> (ampliar)</span>
                </button>
                <figcaption className="mt-2 text-sm text-marino/75">{g.alt}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </>
  );
}
