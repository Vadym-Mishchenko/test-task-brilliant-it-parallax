import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStatsCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  padding: 32px;
  border-radius: 91px;
  width: 32%;
  height: 100%;
  min-height: 108px;
  background: linear-gradient(
    105.75deg,
    rgba(150, 52, 136, 0.3) -69.35%,
    rgba(252, 111, 50, 0.3) 49.94%,
    rgba(255, 74, 89, 0.3) 171.65%
  );

  @media (max-width: 768px) {
    border-radius: 40px;
  }
  @media (max-height: 900px) {
    padding: 16px;
  }
  @media (max-height: 768px) {
    padding: 2px;
  }
`;

export const TopTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 1700px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BottomTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
    text-align: center;
  }
`;
