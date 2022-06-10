import { CsvRow } from 'src/app/shared/components/csv-upload/services/models/csv-record';

export const addRowsRule = (
  actualRows: CsvRow[],
  newRows: CsvRow[]
): CsvRow[] => {
  const rowsLimit = 5;
  const actualRowsLength = actualRows?.length;

  const amountToAdd = rowsLimit - actualRowsLength;
  const rowsToAdd = newRows?.slice(0, amountToAdd);

  return actualRowsLength <= rowsLimit
    ? [...rowsToAdd, ...actualRows]
    : actualRows;
};
