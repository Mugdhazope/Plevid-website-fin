import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useIsMobile } from './useIsMobile.js';

export function useLiteMotion() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    setCoarse(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return !!reduce || isMobile || coarse;
}
