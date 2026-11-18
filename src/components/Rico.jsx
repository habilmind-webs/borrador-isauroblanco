// Negritas estratégicas: los textos marcan las ideas clave con **así**.
// <Rico texto="..." /> las pinta con <strong>; plano() quita las marcas (metadatos, JSON-LD).
export const plano = (s) => String(s ?? '').replace(/\*\*/g, '');

export default function Rico({ texto }) {
  if (texto == null) return null;
  const partes = String(texto).split(/\*\*(.+?)\*\*/g);
  return partes.map((p, i) => (i % 2 ? <strong key={i} className="font-semibold">{p}</strong> : p));
}
