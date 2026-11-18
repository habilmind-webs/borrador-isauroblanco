import Inicio from './pages/Inicio.jsx';
import Biografia from './pages/Biografia.jsx';
import Trayectoria from './pages/Trayectoria.jsx';
import Legado from './pages/Legado.jsx';
import Publicaciones from './pages/Publicaciones.jsx';
import Conferencias from './pages/Conferencias.jsx';
import InMemoriam from './pages/InMemoriam.jsx';
import Galeria from './pages/Galeria.jsx';

export const ROUTES = [
  { path: '/', Component: Inicio, og: 'inicio', nombre: 'Inicio', title: 'Isauro Blanco | Filósofo, pedagogo y psicólogo educativo', description: 'Homenaje a Isauro Blanco, fallecido en 2025: su biografía, trayectoria, libros, conferencias y legado en la educación.' },
  { path: '/biografia', Component: Biografia, og: 'biografia', nombre: 'Biografía', title: 'Biografía de Isauro Blanco | Reseña completa', description: 'Conoce la vida y la obra de Isauro Blanco, filósofo, pedagogo y psicólogo educativo y clínico, autor del Programa Hábilmente.' },
  { path: '/trayectoria', Component: Trayectoria, og: 'trayectoria', nombre: 'Trayectoria', title: 'Trayectoria de Isauro Blanco | Línea de tiempo', description: 'De sus primeras clases a la Mención Honorífica en los Premios Nacionales de Innovación Educativa 2007: la trayectoria de Isauro Blanco.' },
  { path: '/legado', Component: Legado, og: 'legado', nombre: 'Legado', title: 'Legado de Isauro Blanco | Ideas y logros', description: 'Programa Hábilmente, coaching escolar y neuropsicología aplicada a la educación: el legado de Isauro Blanco.' },
  { path: '/publicaciones', Component: Publicaciones, og: 'publicaciones', nombre: 'Publicaciones', title: 'Libros de Isauro Blanco | Publicaciones', description: 'Mente y aprendizaje, Aprender haciendo, El universo de la inteligencia y más: los libros y artículos de Isauro Blanco.' },
  { path: '/conferencias-y-medios', Component: Conferencias, og: 'conferencias-y-medios', nombre: 'Conferencias y medios', title: 'Conferencias y entrevistas de Isauro Blanco', description: 'Vídeos, ponencias y entrevistas de Isauro Blanco sobre neuroeducación, aprendizaje y coaching escolar.' },
  { path: '/in-memoriam', Component: InMemoriam, og: 'in-memoriam', nombre: 'In memoriam', title: 'In memoriam: Isauro Blanco', description: 'Isauro Blanco falleció en Madrid el 29 de junio de 2025. Homenaje a su vida y a su obra.' },
  { path: '/galeria', Component: Galeria, og: 'galeria', nombre: 'Galería', title: 'Galería de Isauro Blanco', description: 'Fotografías de la vida profesional de Isauro Blanco.' },
];
