import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundScroll = styled.div`
  width: 100vw;
  height: 700vh;
  background: linear-gradient(180deg, #000000 66.4%, #191e2a 100%);
`;

export const ContainerStaticPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  pointer-events: auto;
`;

export const WrapperTextTop = styled(motion.div)`
  z-index: 3;
  position: absolute;
  will-change: transform, opacity;
`;

export const WrapperTopButtons = styled(motion.div)`
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 17.86%;
  height: 4.81%;
  min-width: 340px;
  will-change: transform, opacity;
`;

export const WrapperPlanet = styled(motion.div)`
  z-index: 0;
  position: absolute;
  width: 52.92%;
  left: 50.78%;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    width: 80%;
    left: 30%;
  }
`;

export const WrapperStatsCards = styled(motion.div)`
  z-index: 3;
  position: absolute;
  width: 91.67%;
  height: 17.59%;
  left: 4.17%;
  max-height: 190px;
  will-change: transform, opacity;
`;

export const WrapperIconsRow = styled(motion.div)`
  z-index: 3;
  position: absolute;
  top: 39.4%;
  width: 100%;
  height: 21.2%;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    top: 10%;
    height: 80%;
  }
`;

export const WrapperTextMain = styled(motion.div)`
  z-index: 3;
  position: absolute;
  top: 25%;
  left: 5%;
  width: 59.74%;
  height: 39.17%;
  will-change: transform, opacity;

  @media (max-width: 1740px) {
    width: 70%;
    height: 60%;
  }

  @media (max-width: 768px) {
    top: 20%;
    width: 80%;
  }
`;

export const WrapperComet = styled(motion.div)`
  z-index: 2;
  position: absolute;
  top: 50%;
  width: 4%;
  will-change: transform, opacity;
`;

export const WrapperBlurredBlobRed = styled(motion.div)`
  position: absolute;
  height: 73.7%;
  width: 26.3%;
  will-change: transform, opacity;
`;

export const WrapperBlurredBlobBlue = styled(motion.div)`
  position: absolute;
  width: 26.3%;
  height: 68%;
  left: 27%;
  will-change: transform, opacity;
`;

export const WrapperTable = styled(motion.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.17%;
  width: 100%;
  height: 100%;
`;

export const WrapperMoon = styled(motion.div)`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const WrapperEarth = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 51.11%;
  bottom: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
  user-select: none;
`;

export const WrapperBottom = styled(motion.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;
