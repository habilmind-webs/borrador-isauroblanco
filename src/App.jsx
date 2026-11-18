import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { ConsentProvider } from './components/Consent.jsx';
import { ROUTES } from './routes.js';
import NoEncontrada from './pages/NoEncontrada.jsx';

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const r = ROUTES.find((x) => x.path === pathname);
    if (r && document.title !== r.title) document.title = r.title;
  }, [pathname]);
  useEffect(() => {
    if (window.__ibFirst) { window.scrollTo(0, 0); document.getElementById('contenido')?.focus({ preventScroll: true }); }
    window.__ibFirst = true;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ConsentProvider>
      <RouteEffects />
      <Layout>
        <Routes>
          {ROUTES.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </Layout>
    </ConsentProvider>
  );
}
