export interface TableConfig {
  columns: [string, string, string];
  rows: [Row, Row, Row, Row, Row];
}

export interface Row {
  name: string;
  cep: string;
  score: string;
}
