import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../motion/Reveal.jsx';

export default function AccordionItem({ title, meta, children, isOpen, onToggle }) {
  return (
    <article className={`plevid-accordion${isOpen ? ' is-open' : ''}`}>
      <button type="button" className="plevid-accordion__trigger" onClick={onToggle}>
        <div className="plevid-accordion__head">
          <h2 className="plevid-accordion__title">{title}</h2>
          {meta && <p className="plevid-accordion__meta">{meta}</p>}
        </div>
        <span className="plevid-accordion__chevron" aria-hidden>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="plevid-accordion__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="plevid-accordion__inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function AccordionGroup({ items, renderContent }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="plevid-accordion-group">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.06}>
          <AccordionItem
            title={item.title}
            meta={item.meta}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          >
            {renderContent(item)}
          </AccordionItem>
        </Reveal>
      ))}
    </div>
  );
}
