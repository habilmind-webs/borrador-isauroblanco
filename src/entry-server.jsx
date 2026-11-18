import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
export { ROUTES } from './routes.js';
export { LIBROS } from './content.js';
import { BIO_ENTRADILLA as BIO_RICO } from './content.js';
import { plano } from './components/Rico.jsx';
export const BIO_ENTRADILLA = plano(BIO_RICO);

export function render(url) {
  return renderToString(<StrictMode><StaticRouter location={url}><App /></StaticRouter></StrictMode>);
}
