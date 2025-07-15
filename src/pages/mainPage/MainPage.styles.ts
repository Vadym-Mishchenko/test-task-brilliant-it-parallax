import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundScroll = styled.div`
  width: 100vw;
  height: 400vh;
  background: black;
  /* background: linear-gradient(180deg, #000000 36.4%, #191e2a 100%); */
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
`;

export const WrapperTopButtons = styled(motion.div)`
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 17.86%;
  height: 4.81%;
  min-width: 340px;
`;

export const WrapperPlanet = styled(motion.div)`
  z-index: 0;
  position: absolute;
  width: 52.92%;
  left: 50.78%;

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
`;

export const WrapperIconsRow = styled(motion.div)`
  z-index: 3;
  position: absolute;
  top: 39.4%;
  width: 100%;
  height: 21.2%;

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
`;

export const WrapperBlurredBlobRed = styled(motion.div)`
  position: absolute;
`;

export const WrapperBlurredBlobBlue = styled(motion.div)`
  position: absolute;
`;
