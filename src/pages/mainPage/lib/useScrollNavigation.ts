import { useEffect, useRef, useState } from 'react';

export const useScrollNavigation = (maxScreen = 4) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [prevScreen, setPrevScreen] = useState(1);
  const [nextScroll, setNextScroll] = useState<'Up' | 'Down'>('Down');
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (scrollTimeoutRef.current) return;

      setNextScroll(e.deltaY > 0 ? 'Down' : 'Up');

      setCurrentScreen((prev) => {
        const next =
          e.deltaY > 0 ? Math.min(prev + 1, maxScreen) : Math.max(prev - 1, 1);
        if (next !== prev) setPrevScreen(prev);
        return next;
      });

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 700);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return { currentScreen, prevScreen, nextScroll };
};
