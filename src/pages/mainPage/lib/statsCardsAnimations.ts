import { easeIn, easeOut } from 'framer-motion';

export const getStatsCardsAnimation = (prev: number, curr: number) => {
  if (prev === 1 && curr === 2) {
    return {
      initial: { top: '100%', opacity: 0 },
      animate: {
        top: '70.74%',
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
      },
    };
  }

  return {
    initial: { top: '-50%', opacity: 0 },
    animate: {
      top: '70.74%',
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
};

export const getStatsCardsAnimationExit = (scrollDirection: 'Up' | 'Down') => {
  return {
    top: scrollDirection === 'Down' ? '0%' : '100%',
    opacity: 0,
    transition: { duration: 0.5, ease: easeIn },
  };
};
