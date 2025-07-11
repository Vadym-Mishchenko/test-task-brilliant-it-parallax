import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStatsCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 32px;
  border-radius: 91px;
  width: 32%;
  height: 100%;
  background: linear-gradient(
    105.75deg,
    rgba(150, 52, 136, 0.2) -69.35%,
    rgba(252, 111, 50, 0.2) 49.94%,
    rgba(255, 74, 89, 0.2) 171.65%
  );
`;

export const TopTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;
`;

export const BottomTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
