import { BottomTitle, ContainerStatsCard, TopTitle } from './StatsCard.styled';

interface IProps {
  topTitle: string;
  bottomTitle: string;
  id: number;
}

export const StatsCard = ({ bottomTitle, topTitle, id }: IProps) => {
  return (
    <ContainerStatsCard
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        delay: id * 0.2,
      }}
    >
      <TopTitle>{topTitle}</TopTitle>
      <BottomTitle>{bottomTitle}</BottomTitle>
    </ContainerStatsCard>
  );
};
