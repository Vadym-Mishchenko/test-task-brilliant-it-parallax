import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerIconsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Typography = styled.p`
  height: 28%;
  text-align: center;
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 4rem;
  line-height: 100%;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    height: 10%;
  }
`;

export const IconsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.25%;
  height: 44.5%;
  width: 100%;

  @media (max-width: 1600px) {
    height: 30%;
  }
  @media (max-width: 1200px) {
    height: 22%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 80%;
  }
`;

export const IconImage = styled(motion.img)<{ $h: string }>`
  height: ${(props) => props.$h};
  max-height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 7%;
  }
`;
