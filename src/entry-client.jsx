import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

const root = document.getElementById('root');
const app = (<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>);
// Se hidrata solo si el HTML pre-renderizado corresponde a esta ruta. Si el servidor devolvió
// otra página (p. ej. index.html como respaldo SPA), se pinta desde cero sin errores de hidratación.
const ruta = (window.location.pathname.replace(/\/+$/, '') || '/');
if (root.hasChildNodes() && root.dataset.ruta === ruta) hydrateRoot(root, app);
else { root.textContent = ''; createRoot(root).render(app); }
