import { Button } from '@/components';
import {
  ContainerTextTop,
  Heading1,
  Heading2,
  Subheading,
  ContainerButton,
} from './TextTop.styles';

interface IProps {
  screen: number;
}

export const TextTop = ({ screen }: IProps) => {
  return (
    <ContainerTextTop>
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
      <ContainerButton>
        <Button text="Buy Salt AI" size="big" hasBorder />
        <Button text="Try Now" size="big" />
      </ContainerButton>
    </ContainerTextTop>
  );
};
