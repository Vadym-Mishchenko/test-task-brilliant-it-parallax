import {
  IconsContainer,
  MoonStyled,
  MoonText,
  MoonTextContainer,
  MoonTextHeader,
} from './Moon.styled';

export const Moon = () => (
  <>
    <MoonTextContainer>
      <MoonTextHeader>Join our community</MoonTextHeader>
      <MoonText>
        Join us on our mission to to the moon & revolutionize open source AI
        development so that we can build a permissionless, democratized, and
        decentralized AI.
      </MoonText>
      <MoonText>
        Let the fate of AI be in our hands and not that of big tech companies.
      </MoonText>
      <IconsContainer>
        <img src={'./images/tg.png'} alt="telegram" width={64} />
        <img src={'./images/x.svg'} alt="x" />
      </IconsContainer>
    </MoonTextContainer>
    <MoonStyled src={'/images/moon.png'} alt="moon" />
  </>
);
