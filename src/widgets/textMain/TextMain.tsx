import { Button } from '@/components';
import {
  ContainerTextMain,
  TextMainText,
  TextMainTitle,
} from './TextMain.styled';

export const TextMain = () => {
  return (
    <ContainerTextMain>
      <TextMainTitle>
        Crowdsourcing our collective intelligence to build the best AI
      </TextMainTitle>
      <TextMainText>
        Open source AI has been lagging behind the likes of Google and OpenAI by
        billions of dollars.
        <br />
        <br /> Salt aims to solve that by rewarding open source developers who
        contribute to the democratization of AI. We run competitions between AI
        models to find and reward the best AI models. As a result, our users
        will be able to access the latest cutting edge AI models.
      </TextMainText>
      <Button text="Use The Cutting Edge AI" size="big" hasBorder />
    </ContainerTextMain>
  );
};
