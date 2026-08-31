import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({ value, duration = 1.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return undefined;

    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match) return undefined;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return undefined;
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
