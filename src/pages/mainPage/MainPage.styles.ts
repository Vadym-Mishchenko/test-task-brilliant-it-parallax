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
`;

export const WrapperPlanet = styled(motion.div)`
  z-index: 1;
  position: absolute;
  width: 52.92%;
  left: 50.78%;
`;
