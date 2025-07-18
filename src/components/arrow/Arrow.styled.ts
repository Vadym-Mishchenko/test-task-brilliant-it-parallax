import styled, { css } from 'styled-components';

export const StyledArrow = styled.img<{
  color: 'default' | 'red' | 'green';
  $rotation: number;
}>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${({ $rotation }) => $rotation}deg);

  ${({ color }) => {
    switch (color) {
      case 'red':
        return css`
          filter: brightness(0) saturate(100%) invert(27%) sepia(100%)
            saturate(7497%) hue-rotate(326deg) brightness(102%) contrast(107%);
        `;
      case 'green':
        return css`
          filter: brightness(0) saturate(100%) invert(83%) sepia(21%)
            saturate(1397%) hue-rotate(85deg) brightness(93%) contrast(94%);
        `;
      default:
        return css`
          filter: none;
        `;
    }
  }}
`;

export const Dash = styled.span`
  display: inline-block;
  width: 16px;
  height: 0;
  border-radius: 2px;
  border-top: 2px solid #606060;
  margin: 0 4px;
`;
