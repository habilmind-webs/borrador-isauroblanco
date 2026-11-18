import { Container, ButtonLink } from '../components/Ui.jsx';

export default function NoEncontrada() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-titulo text-4xl font-semibold text-marino">Página no encontrada</h1>
      <p className="mt-4 text-lg text-marino/80">La dirección que buscan no existe en este sitio.</p>
      <div className="mt-8"><ButtonLink to="/">Volver al inicio</ButtonLink></div>
    </Container>
  );
}
