export interface CsvRecord {
  headers: string[];
  rows: csvRows[];
}

export interface csvRows {
  name: string;
  cep: string;
  score: string;
}
