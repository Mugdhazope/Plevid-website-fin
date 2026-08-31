import { Children } from 'react';
import { motion } from 'framer-motion';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';

const EASE = [0.22, 1, 0.36, 1];

export default function RevealStagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}) {
  const lite = useLiteMotion();

  const container = {
    hidden: { opacity: lite ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: lite ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const item = lite
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={child?.key ?? i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
