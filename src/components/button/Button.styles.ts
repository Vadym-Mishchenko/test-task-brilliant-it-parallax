import styled, { css } from 'styled-components';

interface IProps {
  $height: number;
  $fontSize: number;
  $padding: string;
  $hasBorder?: boolean;
}

export const StyledButton = styled.button<IProps>`
  z-index: 0;
  position: relative;
  padding: ${({ $padding }) => `${$padding}`};
  width: max-content;
  height: ${({ $height }) => `${$height}px`};
  border-radius: 91px;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  font-weight: 500;
  overflow: hidden;
  color: white;
  transition: color 0.3s ease;
  user-select: none;

  @media (max-width: 768px) {
    height: ${({ $height }) => `${$height * 0.8}px`};
    font-size: ${({ $fontSize }) => `${$fontSize * 0.85}px`};
    padding: ${({ $padding }) => {
      const [topBottom, leftRight] = $padding.split(' ');
      const scaled = (val: string) =>
        val.endsWith('px') ? `${parseInt(val) * 0.8}px` : val;
      return `${scaled(topBottom)} ${scaled(leftRight)}`;
    }};
  }

  @media (max-width: 480px) {
    height: ${({ $height }) => `${$height * 0.7}px`};
    font-size: ${({ $fontSize }) => `${$fontSize * 0.6}px`};
  }

  @media (max-width: 320px) {
    height: ${({ $height }) => `${$height * 0.6}px`};
    font-size: ${({ $fontSize }) => `${$fontSize * 0.4}px`};
  }

  ${({ $hasBorder }) =>
    $hasBorder
      ? css`
          &::after {
            content: '';
            z-index: -1;
            position: absolute;
            inset: 0;
            background: linear-gradient(
              106.2deg,
              #963488 -12.33%,
              #fc6f32 50.28%,
              #ff4a59 114.17%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          &:hover::after {
            opacity: 1;
          }

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            border-radius: inherit;
            background: linear-gradient(
              106.2deg,
              #963488 -12.33%,
              #fc6f32 50.28%,
              #ff4a59 114.17%
            );
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
          }
        `
      : css`
          &::before {
            content: attr(data-text);
            position: absolute;
            transform: translate(-50%, -50%)
            inset: 0;
            background: linear-gradient(
              106.2deg,
              #963488 -12.33%,
              #fc6f32 50.28%,
              #ff4a59 114.17%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          &:hover::before {
            opacity: 1;
          }

          &:hover {
            color: transparent;
          }
        `}
`;
