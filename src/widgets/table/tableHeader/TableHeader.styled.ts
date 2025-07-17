import styled from 'styled-components';

export const TableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

export const TableHeaderTitle = styled.h2`
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 4rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
