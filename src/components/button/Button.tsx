import { StyledButton } from './Button.styles';

interface IProps {
  text: string;
  size: 'small' | 'middle' | 'big';
  hasBorder?: boolean;
}

const SIZE_MAP = {
  small: { height: 54, fontSize: 18 },
  middle: { height: 72, fontSize: 20 },
  big: { height: 75, fontSize: 24 },
};

export const Button = ({ text, size, hasBorder }: IProps) => {
  const { height, fontSize } = SIZE_MAP[size];
  return (
    <StyledButton
      $height={height}
      $fontSize={fontSize}
      $hasBorder={hasBorder}
      data-text={text}
    >
      {text}
    </StyledButton>
  );
};
