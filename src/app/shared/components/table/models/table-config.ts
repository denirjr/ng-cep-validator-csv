export interface TableConfig {
  columns: [string, string, string];
  rows: Row[];
}

export interface Row {
  name: string;
  cep: string;
  score: string;
}
