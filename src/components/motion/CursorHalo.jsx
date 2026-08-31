import { useEffect, useRef, useState } from 'react';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';
import './cursor-halo.css';

const SIZE = 560;
const HALF = SIZE / 2;

export default function CursorHalo() {
  const ref = useRef(null);
  const lite = useLiteMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (lite) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    setActive(true);
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [lite]);

  if (lite) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="plevid-cursor-halo"
      style={{ opacity: active ? 0.45 : 0 }}
    />
  );
}
