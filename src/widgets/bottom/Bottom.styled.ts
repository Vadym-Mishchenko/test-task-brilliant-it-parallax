import styled from 'styled-components';

export const BottomContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BottomText = styled.h2`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const BottomFooter = styled.div`
  position: absolute;
  bottom: 5%;
  left: 4.2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 91.67%;

  @media (max-height: 900px) {
    margin-bottom: 40px;
  }
`;

export const BottomFooterBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomFooterDivider = styled.div`
  width: 100%;
  border: 1px solid #ffffff80;
`;

export const BottomFooterLowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  width: 100%;
`;

export const BottomFooterLowerContainerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  height: 100%;
`;

export const BottomFooterLowerContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  height: 100%;
`;

export const ContainerRightText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #8e8e8e;
  user-select: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #737272ff;
  }
`;

export const BottomIcon = styled.img`
  height: 36px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
