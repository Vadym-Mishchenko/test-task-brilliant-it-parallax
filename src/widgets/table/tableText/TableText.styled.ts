import styled from 'styled-components';

export const TextTableStyled = styled.p`
  font-size: 1.5rem;
  line-height: 36px;
  padding-right: 12%;

  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0;
    font-size: 0.9rem;
    line-height: 20px;
  }
`;
