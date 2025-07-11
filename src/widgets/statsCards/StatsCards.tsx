import { StatsCard } from '@/components';
import { ContainerStatsCards } from './StatsCards.styled';

const stats = [
  { id: 1, topTitle: '1,873', bottomTitle: 'LLM models' },
  { id: 2, topTitle: '$326,734', bottomTitle: 'Paid to data scientists' },
  { id: 3, topTitle: '6,557', bottomTitle: 'Developers' },
];

export const StatsCards = () => {
  return (
    <ContainerStatsCards>
      {stats.map((item) => (
        <StatsCard key={item.id} {...item} />
      ))}
    </ContainerStatsCards>
  );
};
