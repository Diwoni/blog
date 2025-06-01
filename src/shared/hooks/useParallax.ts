// hooks/useParallax.ts
import { useEffect } from 'react';

export function useParallax(selector = '.parallax-bg') {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? '0.3');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector]);
}
