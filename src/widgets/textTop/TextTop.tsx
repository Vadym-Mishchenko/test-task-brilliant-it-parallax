import { Button } from '@/components';
import {
  Container,
  Heading1,
  Heading2,
  Subheading,
  ComtainerButton,
} from './TextTop.styles';

interface IProps {
  screen: number;
}

export const TextTop = ({ screen }: IProps) => {
  return (
    <Container>
      <Heading1 $screen={screen}>
        A new economic primitive for funding decentralized AI
      </Heading1>
      <Heading2 $screen={screen}>
        A new economic primitive for funding decentralized AI
      </Heading2>
      <Subheading>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </Subheading>
      <ComtainerButton>
        <Button text="Buy Salt AI" size="big" hasBorder />
        <Button text="Try Now" size="big" />
      </ComtainerButton>
    </Container>
  );
};
