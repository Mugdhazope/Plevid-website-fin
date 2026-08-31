import { motion } from 'framer-motion';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';

export default function RevealLine({ className }) {
  const lite = useLiteMotion();

  return (
    <motion.span
      className={`plevid-reveal-line${className ? ` ${className}` : ''}`}
      aria-hidden
      initial={{ scaleX: lite ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: lite ? 0.3 : 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'left center' }}
    />
  );
}
