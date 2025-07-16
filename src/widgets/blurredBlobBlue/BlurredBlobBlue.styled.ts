import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BlurredBlobBlueSyled = styled(motion.div)`
  z-index: 0;
  position: absolute;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    166.79deg,
    rgba(50, 191, 252, 0.2) -15.02%,
    rgba(0, 85, 119, 0.2) 83.46%
  );
  filter: blur(50px);
  opacity: 0.5;
  pointer-events: none;
  border-radius: 40% 60% 70% 30% / 50% 40% 60% 50%;
  transform: rotate(180deg);
  will-change: transform, opacity;
`;
