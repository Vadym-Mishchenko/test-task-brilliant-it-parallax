import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Planet, TextTop, TopButtons } from '@/widgets';
import {
  BackgroundScroll,
  ContainerStaticPage,
  WrapperTextTop,
  WrapperTopButtons,
  WrapperPlanet,
} from './MainPage.styles';

const wrapperTextTopScreenStyles = {
  1: {
    width: '84.9%',
    height: '40%',
    top: '29.26%',
    left: '4.17%',
  },
  2: {
    width: '82.9%',
    height: '39.44%',
    top: '17.22%',
    left: '4.17%',
  },
};

const wrapperPlanetScreenStyles = {
  1: {
    top: '9.26%',
    transform: 'rotate(177deg)',
  },
  2: {
    top: '4.26%',
    transform: 'rotate(180deg)',
  },
  3: {
    top: '-4%',
    transform: 'rotate(177deg)',
  },
  4: {
    top: '-17%',
    transform: 'rotate(172deg)',
  },
};

export const MainPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;

    const onWheel = (e: WheelEvent) => {
      if (scrollTimeout) return;

      if (e.deltaY > 0) {
        setCurrentScreen((prev) => Math.min(prev + 1, 4));
      } else if (e.deltaY < 0) {
        setCurrentScreen((prev) => Math.max(prev - 1, 1));
      }

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, 800);
    };

    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('wheel', onWheel);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0 }}
        animate={{ y: `-${(currentScreen - 1) * 100}vh` }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <BackgroundScroll />
      </motion.div>

      <ContainerStaticPage>
        <AnimatePresence>
          {(currentScreen === 1 || currentScreen === 2) && (
            <WrapperTopButtons
              key="top-buttons"
              initial={{ top: '-20%', opacity: 0 }}
              animate={{
                top: '2.96%',
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                  delay: currentScreen === 2 ? 0.1 : 0,
                },
              }}
              exit={{
                top: '-20%',
                opacity: 0,
                transition: { duration: 0.3, ease: 'easeIn' },
              }}
            >
              <TopButtons />
            </WrapperTopButtons>
          )}

          {(currentScreen === 1 || currentScreen === 2) && (
            <WrapperTextTop
              key="text-top"
              initial={{
                opacity: 0,
                top: currentScreen === 2 ? '-20%' : '35%',
                width: wrapperTextTopScreenStyles[currentScreen].width,
                height: wrapperTextTopScreenStyles[currentScreen].height,
                left: wrapperTextTopScreenStyles[currentScreen].left,
              }}
              animate={{
                opacity: 1,
                top: wrapperTextTopScreenStyles[currentScreen].top,
                width: wrapperTextTopScreenStyles[currentScreen].width,
                height: wrapperTextTopScreenStyles[currentScreen].height,
                left: wrapperTextTopScreenStyles[currentScreen].left,
              }}
              exit={{
                opacity: 0,
                top: '-20%',
                transition: { duration: 0.3, ease: 'easeIn' },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <TextTop screen={currentScreen} />
            </WrapperTextTop>
          )}
        </AnimatePresence>
        {(currentScreen === 1 ||
          currentScreen === 2 ||
          currentScreen === 3 ||
          currentScreen === 4) && (
          <WrapperPlanet
            key="planet"
            initial={{
              top: wrapperPlanetScreenStyles[currentScreen].top,
              transform: wrapperPlanetScreenStyles[currentScreen].transform,
            }}
            animate={{
              top: wrapperPlanetScreenStyles[currentScreen].top,
              transform: wrapperPlanetScreenStyles[currentScreen].transform,
            }}
            exit={{ transition: { duration: 0.3, ease: 'easeIn' } }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Planet />
          </WrapperPlanet>
        )}
      </ContainerStaticPage>
    </>
  );
};
