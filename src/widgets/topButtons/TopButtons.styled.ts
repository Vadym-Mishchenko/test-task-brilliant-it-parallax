import styled from 'styled-components';

export const ContainerTopButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1%;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
