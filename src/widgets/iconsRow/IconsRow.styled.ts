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
  font-size: 64px;
  line-height: 100%;
`;

export const IconsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.25%;
  height: 44.5%;
  width: 100%;
`;

export const IconImage = styled.img<{ $h: string }>`
  height: ${(props) => props.$h};
  max-height: 100%;
  object-fit: contain;
`;
