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
  TableHeader,
  TableText,
  Table,
  Moon,
  Earth,
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
  WrapperTable,
  WrapperMoon,
  WrapperBottom,
  WrapperEarth,
} from './MainPage.styles';
import { Bottom } from '@/widgets/bottom';

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
              style={{ top: '2.96%' }}
              initial={{
                transform: 'translateX(-50%) translateY(-22.96vh)',
                opacity: 0,
              }}
              animate={{
                transform: 'translateX(-50%) translateY(0)',
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: easeInOut,
                  delay: currentScreen === 2 ? 0.1 : 0,
                },
              }}
              exit={{
                transform: 'translateX(-50%) translateY(-22.96vh)',
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
            currentScreen === 4 ||
            currentScreen === 5) && (
            <WrapperPlanet
              key="planet"
              initial={{
                top:
                  currentScreen === 5 && prevScreen === 6
                    ? '-100%'
                    : wrapperPlanetScreenStyles[currentScreen].top,
                transform: wrapperPlanetScreenStyles[currentScreen].transform,
                opacity: 0,
              }}
              animate={{
                top: wrapperPlanetScreenStyles[currentScreen].top,
                transform: wrapperPlanetScreenStyles[currentScreen].transform,
                opacity: 1,
              }}
              exit={{
                top: currentScreen === 5 && prevScreen === 6 ? '100%' : '0%',
                transform:
                  currentScreen === 5 && prevScreen === 6
                    ? 'translateY(100%)'
                    : 'translateY(-100%)',
                opacity: 0,
                transition: { duration: 0.4, ease: easeIn },
              }}
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
              key="comet"
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
            currentScreen === 4 ||
            currentScreen === 5) && (
            <WrapperBlurredBlobRed
              key="blurred-blob-red"
              initial={{
                top:
                  currentScreen === 5
                    ? '-100%'
                    : wrapperBlurredBlobRedScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobRedScreenStyles[currentScreen].left,
                transform:
                  wrapperBlurredBlobRedScreenStyles[currentScreen].transform,
                opacity: 0,
              }}
              animate={{
                top: wrapperBlurredBlobRedScreenStyles[currentScreen].top,
                left: wrapperBlurredBlobRedScreenStyles[currentScreen].left,
                transform:
                  wrapperBlurredBlobRedScreenStyles[currentScreen].transform,
                opacity: 1,
              }}
              exit={{
                top: currentScreen === 5 ? '-100%' : '0%',
                transform: 'translateY(-100%)',
                opacity: 0,
                transition: { duration: 0.4, ease: easeIn },
              }}
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
                transform:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].transform,
              }}
              animate={{
                top: wrapperBlurredBlobBlueScreenStyles[currentScreen].top,
                transform:
                  wrapperBlurredBlobBlueScreenStyles[currentScreen].transform,
              }}
              exit={{ transition: { duration: 0.3, ease: easeIn } }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <BlurredBlobBlue />
            </WrapperBlurredBlobBlue>
          )}

          {currentScreen === 5 && (
            <WrapperTable
              key="table"
              initial={{
                opacity: 0,
                y: prevScreen === 4 ? '100vh' : '-100vh',
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
              <TableHeader />
              <TableText />
              <Table />
            </WrapperTable>
          )}

          {currentScreen === 6 && (
            <WrapperMoon
              key="moon"
              initial={{
                opacity: 0,
                y: prevScreen === 5 ? '100vh' : '-100vh',
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
              <Moon />
            </WrapperMoon>
          )}

          {(currentScreen === 6 || currentScreen === 7) && (
            <WrapperEarth
              key="earth"
              initial={{
                opacity: 0,
                y: prevScreen === 6 ? '-100vh' : '100vh',
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: easeInOut },
              }}
              exit={{
                opacity: 0,
                y: '100vh',
                transition: { duration: 0.5, ease: easeIn },
              }}
            >
              <Earth currentScreen={currentScreen} />
            </WrapperEarth>
          )}

          {currentScreen === 7 && (
            <WrapperBottom
              key="bottom"
              initial={{
                y: prevScreen === 6 ? '100vh' : '-100vh',
              }}
              animate={{
                y: 0,
                transition: { duration: 0.7, ease: easeInOut },
              }}
              exit={{
                y: scrollDirection === 'Down' ? '-100vh' : '100vh',
                transition: { duration: 0.5, ease: easeIn },
              }}
            >
              <Bottom />
            </WrapperBottom>
          )}
        </AnimatePresence>
      </ContainerStaticPage>
    </>
  );
};
