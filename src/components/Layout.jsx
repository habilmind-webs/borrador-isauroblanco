import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { NAV, LEGAL, SITE } from '../content.js';
import { useConsent } from './Consent.jsx';
import { Container } from './Ui.jsx';

function Logo() {
  return (
    <Link to="/" className="group inline-flex min-h-[44px] items-center gap-2 font-titulo text-xl font-semibold tracking-tight text-white" aria-label="Isauro Blanco, inicio">
      <span>Isauro Blanco</span>
      <span aria-hidden="true" className="mt-2 h-1.5 w-6 rounded-full bg-turquesa transition-all group-hover:w-8" />
    </Link>
  );
}

const linkCls = ({ isActive }) =>
  `inline-flex min-h-[44px] items-center rounded-lg px-2.5 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa-claro ${isActive ? 'text-white underline decoration-turquesa decoration-2 underline-offset-8' : 'text-white/80 hover:text-white'}`;

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-marino/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV.map((n) => (
              <li key={n.to}><NavLink to={n.to} end className={linkCls}>{n.label}</NavLink></li>
            ))}
          </ul>
        </nav>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa-claro xl:hidden"
          aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen((o) => !o)}>
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </Container>
      <nav id="menu-movil" aria-label="Principal (móvil)" className={`${open ? 'block' : 'hidden'} border-t border-white/10 bg-marino xl:hidden`}>
        <Container className="py-3">
          <ul className="grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <li key={n.to}><NavLink to={n.to} end className={linkCls}>{n.label}</NavLink></li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}

function Footer() {
  const { openPanel } = useConsent();
  return (
    <footer className="bg-marino-900 text-white/85">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-titulo text-lg font-semibold text-white">Isauro Blanco · In memoriam · Falleció el 29 de junio de 2025</p>
          <p className="mt-4">
            <Link to="/in-memoriam" className="inline-flex min-h-[44px] items-center underline decoration-turquesa underline-offset-4 hover:text-white">In memoriam</Link>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Mail aria-hidden="true" className="h-4 w-4 text-turquesa-claro" />
            <span>Contacto: <a href={`mailto:${SITE.email}`} className="inline-flex min-h-[44px] items-center underline underline-offset-4 hover:text-white">{SITE.email}</a></span>
          </p>
        </div>
        <nav aria-label="Pie de página">
          <p className="font-titulo font-semibold text-white">Secciones</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="inline-flex min-h-[44px] items-center hover:text-white hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-titulo font-semibold text-white">Información legal</p>
          <ul className="mt-3">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center hover:text-white hover:underline">
                  {l.label}<span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={openPanel} className="inline-flex min-h-[44px] items-center text-left underline decoration-turquesa underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa-claro">Configurar cookies</button>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-6 text-sm text-white/75 sm:flex-row sm:justify-between">
          <p>Fotografías del archivo de Isauro Blanco</p>
          <p>Sitio realizado por Habilmind en homenaje a Isauro Blanco.</p>
        </Container>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a href="#contenido" className="sr-only z-[70] rounded-lg bg-turquesa px-4 py-3 font-medium text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1} className="focus:outline-none">{children}</main>
      <Footer />
    </>
  );
}
