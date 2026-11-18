import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function PageHeader({ titulo, entradilla, children }) {
  return (
    <header className="bg-marino text-white">
      <Container className="py-14 sm:py-20">
        <h1 className="font-titulo text-4xl font-semibold tracking-tight sm:text-5xl">{titulo}</h1>
        {entradilla && <p className="mt-5 max-w-lectura text-lg leading-relaxed text-white/85">{entradilla}</p>}
        {children}
      </Container>
    </header>
  );
}

export function SectionTitle({ children, id, className = '' }) {
  return <h2 id={id} className={`font-titulo text-2xl font-semibold text-marino sm:text-3xl ${className}`}>{children}</h2>;
}

export function Card({ icon, titulo, texto, fuente, as = 'h3' }) {
  const H = as;
  return (
    <Reveal className="flex h-full flex-col rounded-tarjeta bg-white p-6 shadow-suave ring-1 ring-marino/5">
      {icon && (
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-claro text-turquesa">
          <Icon name={icon} />
        </span>
      )}
      <H className="font-titulo text-lg font-semibold leading-snug text-marino">{titulo}</H>
      <p className="mt-2 leading-relaxed text-marino/85">{texto}</p>
      {fuente && <p className="mt-auto pt-4 text-sm text-marino/70">Fuente: {fuente}</p>}
    </Reveal>
  );
}

export function ButtonLink({ to, children, variant = 'primario', className = '' }) {
  const base = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-titulo font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const v = {
    primario: 'bg-turquesa text-white hover:bg-turquesa-oscuro focus-visible:ring-turquesa',
    claro: 'bg-white text-marino hover:bg-claro focus-visible:ring-white focus-visible:ring-offset-marino',
    borde: 'border border-white/60 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-marino',
  }[variant];
  return <Link to={to} className={`${base} ${v} ${className}`}>{children}</Link>;
}

export function MoreLink({ to, children }) {
  return (
    <Link to={to} className="inline-flex min-h-[44px] items-center gap-2 font-titulo font-medium text-turquesa-oscuro underline-offset-4 hover:underline">
      {children} <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

export function ExtLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 underline decoration-turquesa/50 underline-offset-4 hover:decoration-turquesa ${className}`}>
      {children}
      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}

export function QuoteBlock({ texto, autor, oscuro = false }) {
  return (
    <figure className={`rounded-tarjeta p-8 sm:p-10 ${oscuro ? 'bg-marino text-white' : 'bg-white text-marino shadow-suave'}`}>
      <Icon name="Quote" className={`h-8 w-8 ${oscuro ? 'text-turquesa-claro' : 'text-turquesa'}`} />
      <blockquote className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl">
        <p>«{texto}»</p>
      </blockquote>
      <figcaption className={`mt-4 text-sm ${oscuro ? 'text-white/80' : 'text-marino/75'}`}>{autor}</figcaption>
    </figure>
  );
}
