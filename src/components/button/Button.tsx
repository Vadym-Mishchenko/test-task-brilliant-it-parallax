import { StyledButton } from './Button.styles';

interface IProps {
  text: string;
  size: 'small' | 'middle' | 'big';
  hasBorder?: boolean;
}

const SIZE_MAP = {
  small: { height: 52, fontSize: 18, padding: '14px 32px 16px' },
  middle: { height: 72, fontSize: 20, padding: '22px 48px 24px' },
  big: { height: 75, fontSize: 24, padding: '22px 48px 24px' },
};

export const Button = ({ text, size, hasBorder }: IProps) => {
  const { height, fontSize, padding } = SIZE_MAP[size];

  return (
    <StyledButton
      $height={height}
      $fontSize={fontSize}
      $padding={padding}
      $hasBorder={hasBorder}
      data-text={text}
    >
      {text}
    </StyledButton>
  );
};
