import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BlurredBlobRedSyled = styled(motion.div)`
  z-index: 0;
  position: absolute;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    173.65deg,
    rgba(252, 111, 50, 0.2) -0.71%,
    rgba(255, 74, 89, 0.2) 86.87%
  );
  filter: blur(200px);
  pointer-events: none;
  border-radius: 40% 60% 70% 30% / 50% 40% 60% 50%;
  transform: rotate(180deg);
`;
