import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnimations, destroyAnimations } from '../animations.js';

export default function AnimationBridge() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      destroyAnimations();
      return undefined;
    }

    initAnimations();
    return () => destroyAnimations();
  }, [pathname]);

  return null;
}
