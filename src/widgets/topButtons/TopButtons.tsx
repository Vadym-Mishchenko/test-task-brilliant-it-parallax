import { Button } from '@/components';
import { ContainerTopButtons } from './TopButtons.styled';

export const TopButtons = () => {
  return (
    <ContainerTopButtons>
      <Button size="small" text="How It Works" />
      <Button size="small" text="Buy Salt AI" hasBorder />
    </ContainerTopButtons>
  );
};
