import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundScroll = styled.div`
  width: 100vw;
  height: 400vh;
  background: linear-gradient(180deg, #000000 36.4%, #191e2a 100%);
`;

export const ContainerStaticPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;

export const WrapperTextTop = styled(motion.div)`
  position: absolute;
  pointer-events: auto;
`;
