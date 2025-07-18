import { motion } from 'framer-motion';
import styled from 'styled-components';

export const EarthStyled = styled(motion.img)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1920px;
  min-width: 800px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;

  @media (min-width: 1921px) {
    width: 100%;
  }
`;
