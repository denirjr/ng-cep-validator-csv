export interface TableConfig {
  columns: string[];
  rows: Row[];
}

export interface Row {
  name: string;
  cep: string;
  score: string;
}
