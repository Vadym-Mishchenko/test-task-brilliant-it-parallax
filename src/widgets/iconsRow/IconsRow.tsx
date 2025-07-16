import { useIsMobile } from '@/pages/mainPage/lib';
import {
  ContainerIconsRow,
  IconsContainer,
  Typography,
  IconImage,
} from './IconsRow.styled';
import { icons } from './mock/mock';

export const IconsRow = () => {
  const isMobile = useIsMobile();

  return (
    <ContainerIconsRow>
      <Typography>Projects integrated into the Arrakis AI Ecosystem</Typography>
      <IconsContainer
        initial={{ x: isMobile ? 0 : '20%', opacity: 0 }}
        animate={{ x: isMobile ? 0 : '-6%', opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {icons.map((item, index) => {
          if (isMobile && index === 0) return null;

          const isFirst = index === 0;

          return (
            <IconImage
              key={item.id}
              src={`/images/${item.name}`}
              alt={`icon ${item.name}`}
              $h={item.h}
              initial={{ opacity: 1 }}
              animate={
                !isMobile && isFirst
                  ? {
                      opacity: 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    }
                  : {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }
              }
            />
          );
        })}
      </IconsContainer>
    </ContainerIconsRow>
  );
};
