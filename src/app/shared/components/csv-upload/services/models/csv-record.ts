export interface CsvRecord {
  headers: string[];
  rows: CsvRow[];
}

export interface CsvRow {
  name: string;
  cep: string;
  score: string;
  isValid: boolean;
}
