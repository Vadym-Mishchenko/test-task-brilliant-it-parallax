import { motion, AnimatePresence, easeIn, easeInOut } from 'framer-motion';
import { Planet, StatsCards, TextTop, TopButtons, IconsRow } from '@/widgets';
import {
  wrapperPlanetScreenStyles,
  wrapperTextTopScreenStyles,
  useScrollNavigation,
  getStatsCardsAnimation,
  getStatsCardsAnimationExit,
} from './lib';
import {
  BackgroundScroll,
  ContainerStaticPage,
  WrapperTextTop,
  WrapperTopButtons,
  WrapperPlanet,
  WrapperStatsCards,
  WrapperIconsRow,
} from './MainPage.styles';

export const MainPage = () => {
  const { currentScreen, prevScreen, nextScroll } = useScrollNavigation();

  return (
    <>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0 }}
        animate={{ y: `-${(currentScreen - 1) * 100}vh` }}
        transition={{ duration: 0.7, ease: easeInOut }}
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
                  ease: easeInOut,
                  delay: currentScreen === 2 ? 0.1 : 0,
                },
              }}
              exit={{
                top: '-20%',
                opacity: 0,
                transition: { duration: 0.3, ease: easeIn },
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
                transition: { duration: 0.3, ease: easeIn },
              }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <TextTop screen={currentScreen} />
            </WrapperTextTop>
          )}

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
              exit={{ transition: { duration: 0.3, ease: easeIn } }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <Planet />
            </WrapperPlanet>
          )}

          {currentScreen === 2 && (
            <WrapperStatsCards
              key={'stats-cards'}
              initial={
                getStatsCardsAnimation(prevScreen, currentScreen).initial
              }
              animate={
                getStatsCardsAnimation(prevScreen, currentScreen).animate
              }
              exit={getStatsCardsAnimationExit(nextScroll)}
            >
              <StatsCards />
            </WrapperStatsCards>
          )}

          {currentScreen === 3 && (
            <WrapperIconsRow
              key="icons-row"
              initial={{ opacity: 0, y: '100vh' }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: easeInOut },
              }}
              exit={{
                opacity: 0,
                y: '-100vh',
                transition: { duration: 0.5, ease: easeIn },
              }}
            >
              <IconsRow />
            </WrapperIconsRow>
          )}
        </AnimatePresence>
      </ContainerStaticPage>
    </>
  );
};
