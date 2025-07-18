import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Model } from '../mock/mock';

export const TableContainer = styled(motion.table)`
  width: 100%;
  max-width: 100vw;
  height: 70%;
  border-collapse: collapse;
`;

export const TableScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const TableHeader = styled.th`
  padding: 24px;
  background: transparent;
  color: #8f99b0;
  font-weight: 600;
  text-align: left;
  user-select: none;
  font-size: 1rem;
`;

export const TableRow = styled.tr<{ $isEven: boolean }>`
  background-color: ${({ $isEven }) => ($isEven ? 'transparent' : '#C9D9FF14')};
`;

export const TableCell = styled.td<{ $align?: 'start' | 'center' | 'end' }>`
  padding: 24px;
  text-align: ${({ $align }) => $align || 'end'};
  font-family: 'Metrophobic', sans-serif;
`;

export const TrendIconWrapper = styled.span<{ $trend: Model['trend'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 6px;

  svg {
    fill: ${({ $trend }) =>
      $trend === 'up' ? 'green' : $trend === 'down' ? 'red' : 'gray'};
  }
`;

export const TablePaginationBtnContainer = styled(motion.div)`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const TablePaginationBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 56px;
  height: 56px;
  border-radius: 91px;
  border: 1px solid white;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c9d9ff14;
  }
`;
