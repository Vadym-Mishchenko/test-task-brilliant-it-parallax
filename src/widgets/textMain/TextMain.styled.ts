import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerTextMain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const TextMainTitle = styled.h2`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: 0;
`;

export const TextMainText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  vertical-align: bottom;
`;
