import { EarthStyled } from './Earth.styled';

interface IProps {
  currentScreen: number;
}

export const Earth = ({ currentScreen }: IProps) => {
  return (
    <EarthStyled
      src="/images/earth.png"
      alt="earth"
      initial={{ bottom: '-65%' }}
      animate={{ bottom: currentScreen === 6 ? '-65%' : '0%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    />
  );
};
