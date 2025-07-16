import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerTextMain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

export const TextMainTitle = styled.h2`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TextMainText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  vertical-align: bottom;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
