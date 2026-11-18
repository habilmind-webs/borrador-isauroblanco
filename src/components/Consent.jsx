import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Settings2, ShieldCheck } from 'lucide-react';
import { LEGAL } from '../content.js';

// Gestor de consentimiento propio, sin servicios de terceros (RGPD, LSSI, guía de la AEPD).
// Hoy solo se usan cookies técnicas. Las categorías «Analítica» y «Marketing» existen para el futuro.
const STORAGE_KEY = 'ib-consentimiento';
export const CONSENT_VERSION = '1';
export const CATEGORIES = ['analitica', 'marketing'];
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 meses

const ConsentContext = createContext(null);
export const useConsent = () => useContext(ConsentContext);

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    const sameCats = d && d.categorias && CATEGORIES.every((c) => typeof d.categorias[c] === 'boolean') && Object.keys(d.categorias).length === CATEGORIES.length;
    if (!d || d.version !== CONSENT_VERSION || !sameCats || !d.fecha || Date.now() - Date.parse(d.fecha) > MAX_AGE_MS) return null;
    return d;
  } catch { return null; }
}

// Carga condicionada: cualquier script no esencial futuro debe registrarse aquí con su categoría.
const loaders = { analitica: [], marketing: [] };
export function whenConsented(categoria, fn) { loaders[categoria].push(fn); }

export function ConsentProvider({ children }) {
  const [decision, setDecision] = useState(null); // null = sin decidir o aún sin hidratar
  const [ready, setReady] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const openerRef = useRef(null);

  useEffect(() => { setDecision(readStored()); setReady(true); }, []);

  useEffect(() => {
    if (!decision) return;
    CATEGORIES.forEach((c) => { if (decision.categorias[c]) loaders[c].splice(0).forEach((fn) => fn()); });
  }, [decision]);

  const save = useCallback((categorias) => {
    const d = { version: CONSENT_VERSION, fecha: new Date().toISOString(), categorias };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch { /* sin almacenamiento */ }
    setDecision(d);
    setPanelOpen(false);
  }, []);

  const acceptAll = useCallback(() => save({ analitica: true, marketing: true }), [save]);
  const rejectAll = useCallback(() => save({ analitica: false, marketing: false }), [save]);
  const openPanel = useCallback(() => { openerRef.current = document.activeElement; setPanelOpen(true); }, []);
  const closePanel = useCallback(() => {
    setPanelOpen(false);
    const el = openerRef.current;
    if (el && typeof el.focus === 'function') setTimeout(() => el.focus(), 0);
  }, []);

  const value = { decision, ready, acceptAll, rejectAll, save, openPanel, closePanel, panelOpen,
    allowed: (c) => !!(decision && decision.categorias[c]) };

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {ready && !decision && !panelOpen && <Banner />}
      {panelOpen && <Panel />}
    </ConsentContext.Provider>
  );
}

const btn = 'min-h-[44px] flex-1 rounded-xl px-4 py-2.5 font-titulo text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const btnSame = `${btn} bg-turquesa text-white hover:bg-turquesa-oscuro focus-visible:ring-turquesa focus-visible:ring-offset-marino`;

function LegalLinks({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-0 text-sm">
      {items.map((l) => (
        <li key={l.href}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center underline underline-offset-4 hover:text-turquesa-claro">
            {l.label}<span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Banner() {
  const { acceptAll, rejectAll, openPanel } = useConsent();
  return (
    <section aria-label="Preferencias de cookies" className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5">
      <div className="mx-auto max-w-4xl rounded-2xl bg-marino p-4 text-white shadow-2xl ring-1 ring-white/10 sm:p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-turquesa-claro" />
          <p className="text-[15px] leading-snug sm:text-base sm:leading-relaxed">Este sitio usa cookies técnicas para funcionar. Con su permiso, también podrían usarse cookies de analítica o de marketing. Pueden aceptarlas, rechazarlas o configurarlas.</p>
        </div>
        <div className="mt-1 sm:pl-9"><LegalLinks items={[LEGAL[2], LEGAL[1], LEGAL[0]]} /></div>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3 [&>button]:px-2 [&>button]:text-sm sm:[&>button]:text-base">
          <button type="button" className={btnSame} onClick={acceptAll}>Aceptar todas</button>
          <button type="button" className={btnSame} onClick={rejectAll}>Rechazar todas</button>
          <button type="button" className={btnSame} onClick={openPanel}>Configurar</button>
        </div>
      </div>
    </section>
  );
}

function Switch({ id, label, checked, onChange, disabled, descId }) {
  return (
    <button
      type="button" role="switch" id={id} aria-checked={checked} aria-label={label} aria-describedby={descId}
      disabled={disabled} onClick={() => onChange && onChange(!checked)}
      className={`relative inline-flex h-11 w-[72px] shrink-0 items-center rounded-full p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquesa focus-visible:ring-offset-2 ${checked ? 'bg-turquesa' : 'bg-marino/30'} ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
    >
      <span className={`inline-block h-8 w-8 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-8' : 'translate-x-0'}`} />
      <span className="sr-only">{checked ? 'activada' : 'desactivada'}</span>
    </button>
  );
}

function Panel() {
  const { decision, save, acceptAll, rejectAll, closePanel } = useConsent();
  const [cats, setCats] = useState(() => ({ analitica: false, marketing: false, ...(decision ? decision.categorias : {}) }));
  const dialogRef = useRef(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    const focusables = () => Array.from(dlg.querySelectorAll('button:not([disabled]), a[href]'));
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); closePanel(); return; }
      if (e.key !== 'Tab') return;
      const f = focusables(); const first = f[0]; const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closePanel]);

  const rows = [
    { key: 'necesarias', label: 'Necesarias', desc: 'Siempre activas. Permiten el funcionamiento del sitio y recordar esta elección.', locked: true },
    { key: 'analitica', label: 'Analítica', desc: 'Permitirían medir cómo se usa el sitio. Actualmente no se usan servicios de esta categoría.' },
    { key: 'marketing', label: 'Marketing', desc: 'Permitirían mostrar contenido o publicidad de terceros. Actualmente no se usan servicios de esta categoría.' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-marino-900/60 p-3 sm:items-center sm:p-6">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="cookies-titulo" aria-describedby="cookies-desc"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 text-marino shadow-2xl sm:p-8">
        <div className="flex items-center gap-3">
          <Settings2 aria-hidden="true" className="h-6 w-6 text-turquesa" />
          <h2 id="cookies-titulo" className="font-titulo text-2xl font-semibold">Preferencias de cookies</h2>
        </div>
        <p id="cookies-desc" className="mt-3 leading-relaxed text-marino/85">Elijan qué categorías de cookies permiten. Pueden cambiar o retirar su consentimiento en cualquier momento desde «Configurar cookies», en el pie de página.</p>
        <ul className="mt-5 divide-y divide-marino/10">
          {rows.map((r) => (
            <li key={r.key} className="flex items-start justify-between gap-4 py-4">
              <div>
                <p className="font-titulo text-lg font-semibold" id={`cat-${r.key}-label`}>{r.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-marino/80" id={`cat-${r.key}-desc`}>{r.desc}</p>
              </div>
              <Switch id={`cat-${r.key}`} label={r.label} descId={`cat-${r.key}-desc`}
                checked={r.locked ? true : cats[r.key]} disabled={r.locked}
                onChange={r.locked ? undefined : (v) => setCats((c) => ({ ...c, [r.key]: v }))} />
            </li>
          ))}
        </ul>
        <div className="mt-2 text-marino [&_a]:text-turquesa-oscuro"><LegalLinks items={[LEGAL[2], LEGAL[1], LEGAL[0]]} /></div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button type="button" className={btnSame.replace('focus-visible:ring-offset-marino', '')} onClick={() => save({ analitica: cats.analitica, marketing: cats.marketing })}>Guardar preferencias</button>
          <button type="button" className={btnSame.replace('focus-visible:ring-offset-marino', '')} onClick={acceptAll}>Aceptar todas</button>
          <button type="button" className={btnSame.replace('focus-visible:ring-offset-marino', '')} onClick={rejectAll}>Rechazar todas</button>
        </div>
      </div>
    </div>
  );
}
