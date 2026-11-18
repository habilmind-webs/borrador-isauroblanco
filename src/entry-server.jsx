import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
export { ROUTES } from './routes.js';
export { LIBROS, BIO_ENTRADILLA } from './content.js';

export function render(url) {
  return renderToString(<StrictMode><StaticRouter location={url}><App /></StaticRouter></StrictMode>);
}
