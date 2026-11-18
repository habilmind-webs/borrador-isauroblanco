import { useEffect, useRef, useState } from 'react';

// Aparece con un fundido suave al entrar en pantalla. El contenido es visible sin JavaScript
// y en el HTML pre-renderizado; respeta prefers-reduced-motion (ver style.css).
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState('ssr');
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // ya visible: no se oculta
    setState('hidden');
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setState('shown'); io.disconnect(); }
    }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = state === 'hidden' ? 'reveal reveal-hidden' : state === 'shown' ? 'reveal' : '';
  return <Tag ref={ref} className={`${cls} ${className}`} {...rest}>{children}</Tag>;
}
