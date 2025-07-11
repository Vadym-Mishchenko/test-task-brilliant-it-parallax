import {
  ContainerIconsRow,
  IconsContainer,
  Typography,
  IconImage,
} from './IconsRow.styled';
import { icons } from './mock/mock';

export const IconsRow = () => {
  return (
    <ContainerIconsRow>
      <Typography>Projects integrated into the Arrakis AI Ecosystem</Typography>
      <IconsContainer
        initial={{ x: '20%', opacity: 0 }}
        animate={{ x: '-9.5%', opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {icons.map((item) => (
          <IconImage
            key={item.id}
            src={`/images/${item.name}`}
            alt={`icon ${item.name}`}
            $h={item.h}
          />
        ))}
      </IconsContainer>
    </ContainerIconsRow>
  );
};
