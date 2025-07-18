import { Button } from '@/components';
import {
  BottomContainer,
  BottomFooter,
  BottomFooterBtnsContainer,
  BottomText,
  BottomFooterDivider,
  BottomFooterLowerContainer,
  BottomFooterLowerContainerLeft,
  BottomFooterLowerContainerRight,
  ContainerRightText,
  BottomIcon,
} from './Bottom.styled';

export const Bottom = () => {
  return (
    <BottomContainer>
      <BottomText>Join our community and harvest $SALT</BottomText>
      <BottomFooter>
        <BottomFooterBtnsContainer>
          <Button text="How it Works" size="small" />
          <Button text="Buy Salt AI" size="small" />
        </BottomFooterBtnsContainer>
        <BottomFooterDivider />
        <BottomFooterLowerContainer>
          <BottomFooterLowerContainerLeft>
            <BottomIcon src={'./images/tg.png'} alt="telegram" />
            <BottomIcon src={'./images/x.svg'} alt="x" />
          </BottomFooterLowerContainerLeft>
          <BottomFooterLowerContainerRight>
            <ContainerRightText>Terms of Use</ContainerRightText>
            <ContainerRightText>Privacy Policy</ContainerRightText>
            <ContainerRightText>Cookie Policy</ContainerRightText>
          </BottomFooterLowerContainerRight>
        </BottomFooterLowerContainer>
      </BottomFooter>
    </BottomContainer>
  );
};
