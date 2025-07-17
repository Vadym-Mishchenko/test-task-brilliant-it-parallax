import { Button } from '@/components';
import { TableHeaderContainer, TableHeaderTitle } from './TableHeader.styled';

export const TableHeader = () => {
  return (
    <TableHeaderContainer>
      <TableHeaderTitle>LLM Leaderboard</TableHeaderTitle>
      <Button text="Submit your model" size="big" hasBorder />
    </TableHeaderContainer>
  );
};
