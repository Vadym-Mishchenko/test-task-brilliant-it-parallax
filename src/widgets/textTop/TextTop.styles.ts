import styled from 'styled-components';

interface Iprops {
  $screen: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledHeading = styled.h1<Iprops>`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 500;
  font-size: ${({ $screen }) =>
    $screen === 1 ? 'clamp(24px, 8vw, 128px)' : 'clamp(24px, 8vw, 125px)'};
  line-height: 100%;
  letter-spacing: 0;
  transition: all 0.6s ease-in-out;
  pointer-events: none;
  -webkit-text-fill-color: transparent;
`;

export const Heading1 = styled(StyledHeading)`
  position: absolute;
  opacity: ${({ $screen }) => ($screen === 1 ? 1 : 0)};
  background: linear-gradient(
    109.22deg,
    #b53ea4 3.07%,
    #fc6f32 47.61%,
    #ff4a59 93.05%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export const Heading2 = styled(StyledHeading)`
  opacity: ${({ $screen }) => ($screen === 2 ? 1 : 0)};
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
    linear-gradient(106.2deg, #ffd6f9 -12.33%, #ffcbb4 50.28%, #ffbec3 114.17%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export const Subheading = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(8px, 2vw, 24px);
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;
`;

export const ComtainerButton = styled.div`
  display: flex;
  gap: 1%;
`;
