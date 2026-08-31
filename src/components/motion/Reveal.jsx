import { motion } from 'framer-motion';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
  x = 0,
  amount = 0.3,
  as = 'div',
}) {
  const lite = useLiteMotion();
  const Component = motion[as] || motion.div;

  if (lite) {
    return (
      <Component
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay }}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}
