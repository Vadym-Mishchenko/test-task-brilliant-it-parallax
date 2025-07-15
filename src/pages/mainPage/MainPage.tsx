import { motion, AnimatePresence, easeIn, easeInOut } from 'framer-motion';
import {
  Planet,
  StatsCards,
  TextTop,
  TopButtons,
  IconsRow,
  TextMain,
  Comet,
  BlurredBlobRed,
  BlurredBlobBlue,
} from '@/widgets';
import {
  wrapperPlanetScreenStyles,
  wrapperTextTopScreenStyles,
  useScrollNavigation,
  getStatsCardsAnimation,
  getStatsCardsAnimationExit,
  wrapperBlurredBlobRedScreenStyles,
  wrapperBlurredBlobBlueScreenStyles,
} from './lib';
import {
  BackgroundScroll,
  ContainerStaticPage,
  WrapperTextTop,
  WrapperTopButtons,
  WrapperPlanet,
  WrapperStatsCards,
  WrapperIconsRow,
  WrapperTextMain,
  WrapperComet,
  WrapperBlurredBlobRed,
  WrapperBlurredBlobBlue,
} from './MainPage.styles';

export const MainPage = () => {
  const { currentScreen, prevScreen, scrollDirection } = useScrollNavigation();

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
              <WrapperBlurredBlobRed />
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
              key="stats-cards"
              initial={
                getStatsCardsAnimation(prevScreen, currentScreen).initial
              }
              animate={
                getStatsCardsAnimation(prevScreen, currentScreen).animate
              }
              exit={
                scrollDirection !== null
                  ? getStatsCardsAnimationExit(scrollDirection)
                  : undefined
              }
            >
              <StatsCards />
            </WrapperStatsCards>
          )}

          {currentScreen === 3 && (
            <WrapperIconsRow
              key="icons-row"
              initial={{
                opacity: 0,
                y: prevScreen === 2 ? '100vh' : '-100vh',
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: easeInOut },
              }}
              exit={{
                opacity: 0,
                y: scrollDirection === 'Down' ? '-100vh' : '100vh',
                transition: { duration: 0.5, ease: easeIn },
              }}
            >
              <IconsRow />
            </WrapperIconsRow>
          )}

          {currentScreen === 4 && (
            <WrapperTextMain
              key="text-main"
              initial={{
                opacity: 0,
                y: prevScreen === 3 ? '100vh' : '-100vh',
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: easeInOut },
              }}
              exit={{
                opacity: 0,
                y: scrollDirection === 'Down' ? '-100vh' : '100vh',
                transition: { duration: 0.5, ease: easeIn },
              }}
            >
              <TextMain />
            </WrapperTextMain>
          )}

          {currentScreen === 4 && prevScreen === 3 && (
            <WrapperComet
              initial={{
                x: '-20vw',
                y: '-50%',
                opacity: 0,
              }}
              animate={{
                x: '100vw',
                y: '50vh',
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: 'linear',
                },
              }}
              exit={{ opacity: 0 }}
            >
              <Comet />
            </WrapperComet>
          )}

          {(currentScreen === 1 ||
            currentScreen === 2 ||
            currentScreen === 3 ||
            currentScreen === 4) && (
            <WrapperBlurredBlobRed
              key="blurred-blob-red"
              initial={{
                top: wrapperBlurredBlobRedScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobRedScreenStyles[currentScreen].left,
                width: wrapperBlurredBlobRedScreenStyles[currentScreen].width,
                height: wrapperBlurredBlobRedScreenStyles[currentScreen].height,
                transform:
                  wrapperBlurredBlobRedScreenStyles[currentScreen].transform,
              }}
              animate={{
                top: wrapperBlurredBlobRedScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobRedScreenStyles[currentScreen].left,
                width: wrapperBlurredBlobRedScreenStyles[currentScreen].width,
                height: wrapperBlurredBlobRedScreenStyles[currentScreen].height,
                transform:
                  wrapperBlurredBlobRedScreenStyles[currentScreen].transform,
              }}
              exit={{ transition: { duration: 0.3, ease: easeIn } }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <BlurredBlobRed />
            </WrapperBlurredBlobRed>
          )}

          {(currentScreen === 1 ||
            currentScreen === 2 ||
            currentScreen === 3 ||
            currentScreen === 4) && (
            <WrapperBlurredBlobBlue
              key="blurred-blob-blue"
              initial={{
                top: wrapperBlurredBlobBlueScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobBlueScreenStyles[currentScreen].left,
                width: wrapperBlurredBlobBlueScreenStyles[currentScreen].width,
                height:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].height,
                transform:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].transform,
              }}
              animate={{
                top: wrapperBlurredBlobBlueScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobBlueScreenStyles[currentScreen].left,
                width: wrapperBlurredBlobBlueScreenStyles[currentScreen].width,
                height:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].height,
                transform:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].transform,
              }}
              exit={{ transition: { duration: 0.3, ease: easeIn } }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <BlurredBlobBlue />
            </WrapperBlurredBlobBlue>
          )}
        </AnimatePresence>
      </ContainerStaticPage>
    </>
  );
};
