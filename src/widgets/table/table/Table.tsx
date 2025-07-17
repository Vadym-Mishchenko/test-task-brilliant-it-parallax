import { useEffect, useState } from 'react';
import { columnKeys, columnTitles, models } from '../mock/mock';
import { AnimatePresence } from 'framer-motion';
import {
  TableCell,
  TableContainer,
  TableRow,
  TrendIconWrapper,
  TableHeader,
  TablePaginationBtn,
  TablePaginationBtnContainer,
  TableScrollWrapper,
} from './Table.styled';
import { Arrow } from '@/components';

export const Table = () => {
  const [page, setPage] = useState<0 | 1>(0);
  const [visible, setVisible] = useState(true);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    const height = window.innerHeight;
    if (height < 900) {
      setPageSize(5);
    }
  }, []);

  const paginatedModels = models.slice(page * pageSize, (page + 1) * pageSize);

  const handleTogglePage = () => {
    setVisible(false);

    setTimeout(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
      setVisible(true);
    }, 300);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
          <TableScrollWrapper>
            <TableContainer
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <thead>
                <tr>
                  <TableHeader />
                  {columnKeys.map((key, colIndex) => (
                    <TableHeader
                      key={key}
                      style={{
                        textAlign:
                          colIndex === 0
                            ? 'center'
                            : colIndex === 1
                              ? 'start'
                              : 'end',
                      }}
                    >
                      {columnTitles[key]}
                    </TableHeader>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedModels.map((model, index) => (
                  <TableRow key={model.id} isEven={index % 2 === 1}>
                    <TableCell align="center">
                      <TrendIconWrapper trend={model.trend}>
                        <Arrow
                          direction={model.trend}
                          color={model.trend === 'up' ? 'green' : 'red'}
                        />
                      </TrendIconWrapper>
                    </TableCell>
                    {columnKeys.map((key, colIndex) => (
                      <TableCell
                        key={key}
                        align={
                          colIndex === 1
                            ? 'start'
                            : colIndex === 0
                              ? 'center'
                              : 'end'
                        }
                      >
                        {model[key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
          </TableScrollWrapper>
        )}
      </AnimatePresence>

      <TablePaginationBtnContainer>
        <TablePaginationBtn onClick={handleTogglePage}>
          <Arrow color="default" direction={page ? 'up' : 'down'} />
        </TablePaginationBtn>
      </TablePaginationBtnContainer>
    </>
  );
};
