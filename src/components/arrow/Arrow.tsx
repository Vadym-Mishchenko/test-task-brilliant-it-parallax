import { StyledArrow, Dash } from './Arrow.styled';

interface IProps {
  direction: 'up' | 'down' | 'same';
  color: 'default' | 'red' | 'green';
}

export const Arrow = ({ direction, color }: IProps) => {
  const rotation = direction === 'up' ? 180 : 0;

  if (direction === 'same') {
    return <Dash />;
  }

  return (
    <StyledArrow
      src="/images/vector.svg"
      alt="arrow"
      color={color}
      rotation={rotation}
    />
  );
};
