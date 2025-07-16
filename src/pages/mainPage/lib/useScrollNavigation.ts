import { useEffect, useRef, useState } from 'react';

export const useScrollNavigation = (maxScreen = 4) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [prevScreen, setPrevScreen] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<'Up' | 'Down' | null>(
    null
  );

  const currentScreenRef = useRef(currentScreen);
  const prevScreenRef = useRef(prevScreen);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lockScrollRef = useRef(false); // Prevents rapid screen switching

  const lastDirectionRef = useRef<'Up' | 'Down' | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const wheelDeltaAccum = useRef(0);

  // Keep refs in sync with state
  useEffect(() => {
    currentScreenRef.current = currentScreen;
  }, [currentScreen]);

  useEffect(() => {
    prevScreenRef.current = prevScreen;
  }, [prevScreen]);

  // Shared screen change logic
  const tryChangeScreen = (direction: 'Up' | 'Down') => {
    if (lockScrollRef.current) return;

    // Reset any pending scroll timeout if direction changes suddenly
    if (lastDirectionRef.current && lastDirectionRef.current !== direction) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      wheelDeltaAccum.current = 0;
    }
    lastDirectionRef.current = direction;

    const next =
      direction === 'Down'
        ? Math.min(currentScreenRef.current + 1, maxScreen)
        : Math.max(currentScreenRef.current - 1, 1);

    if (next === currentScreenRef.current) return;

    setScrollDirection(direction);
    setPrevScreen(currentScreenRef.current);

    // Delay the screen update slightly
    scrollTimeoutRef.current = setTimeout(() => {
      setCurrentScreen(next);
      setScrollDirection(null);
      scrollTimeoutRef.current = null;

      lockScrollRef.current = true;
      lockTimeoutRef.current = setTimeout(() => {
        lockScrollRef.current = false;
      }, 500);
    }, 50);
  };

  // Handle mouse wheel scroll
  const onWheel = (e: WheelEvent) => {
    wheelDeltaAccum.current += e.deltaY;
    const threshold = 100;

    if (Math.abs(wheelDeltaAccum.current) >= threshold) {
      const direction = wheelDeltaAccum.current > 0 ? 'Down' : 'Up';
      tryChangeScreen(direction);
      wheelDeltaAccum.current = 0;
    }
  };

  // Handle touch start (mobile)
  const onTouchStart = (e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  // Handle touch end and determine swipe direction
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartYRef.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartYRef.current - touchEndY;

    const swipeThreshold = 80; // Minimum swipe distance in px

    if (Math.abs(diffY) > swipeThreshold) {
      const direction = diffY > 0 ? 'Down' : 'Up';
      tryChangeScreen(direction);
    }

    touchStartYRef.current = null;
  };

  // Set up and clean up event listeners
  useEffect(() => {
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, [maxScreen]);

  return { currentScreen, prevScreen, scrollDirection };
};
