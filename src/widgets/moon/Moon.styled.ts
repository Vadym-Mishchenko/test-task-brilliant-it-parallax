import styled from 'styled-components';

export const MoonTextContainer = styled.div`
  position: absolute;
  top: 35.23%;
  left: 8.33%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 49.01%;
  height: 29.54%;

  @media (max-width: 768px) {
    top: 15.23%;
  }
`;

export const MoonTextHeader = styled.h2`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MoonText = styled.p`
  font-size: 1.5rem;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 20px;
`;

export const MoonStyled = styled.img`
  position: absolute;
  height: 44.81%;
  left: 64.79%;
  top: 27.59%;
  user-select: none;
`;
