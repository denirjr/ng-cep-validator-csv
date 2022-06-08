import { csvRows } from 'src/app/shared/components/csv-upload/services/models/csv-record';

export const addRowsRule = (
  receivesActualRows: csvRows[],
  receivesNewRows: csvRows[]
): csvRows[] => {
  const rowsLimit = 5;
  const actualRows = receivesActualRows?.length;

  const amountToAdd = rowsLimit - actualRows;
  const rowsToAdd = receivesNewRows?.slice(0, amountToAdd);

  return actualRows < rowsLimit
    ? [...rowsToAdd, ...receivesActualRows]
    : receivesActualRows;
};
